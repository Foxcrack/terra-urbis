/**
 * Terra Urbis - Generación de árboles procedurales con InstancedMesh
 * Modela vegetación arquitectónica estilizada fuera de la trama urbana.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { WorldParams, TerrainMetrics, RenderQuality } from '../types';
import { mulberry32, PerlinNoise } from './noise';
import { evaluateTerrainHeight, TERRAIN_SIZE } from './terrain';

export interface TreeData {
  matrix: THREE.Matrix4;
  color: THREE.Color;
}

/**
 * Crea la geometría unitaria estilizada de un árbol arquitectónico:
 * Tronco cilíndrico bajo + Copa cónica/poligonal simplificada
 */
export function createTreeGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  // Tronco (y = 0 a 1.2)
  const trunk = new THREE.CylinderGeometry(0.12, 0.22, 1.2, 5);
  trunk.translate(0, 0.6, 0);
  parts.push(trunk);

  // Copa baja
  const canopyLow = new THREE.ConeGeometry(1.2, 2.0, 6);
  canopyLow.translate(0, 1.2 + 1.0, 0);
  parts.push(canopyLow);

  // Copa alta superpuesta
  const canopyHigh = new THREE.ConeGeometry(0.85, 1.6, 6);
  canopyHigh.translate(0, 2.0 + 0.8, 0);
  parts.push(canopyHigh);

  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return merged;
}

// Variación tonal de follaje arquitectónico (verdes bosque, oliva, pino, salvia)
const FOLIAGE_COLORS = [
  new THREE.Color(0x3d663d), // Verde bosque
  new THREE.Color(0x4a7342), // Verde hoja
  new THREE.Color(0x2f5233), // Verde pino oscuro
  new THREE.Color(0x567d46), // Verde oliva suave
  new THREE.Color(0x618548), // Verde prado
];

/**
 * Calcula las instancias de árboles de manera determinista según la semilla del mundo.
 */
export function generateTreeInstances(
  params: WorldParams,
  metrics: TerrainMetrics,
  perlin: PerlinNoise,
  quality: RenderQuality
): TreeData[] {
  // En calidad baja para móviles, se omiten árboles para asegurar 60 fps
  if (quality === 'baja') return [];

  const maxTrees = quality === 'alta' ? 260 : 110;
  const trees: TreeData[] = [];
  const rng = mulberry32(params.seed + 88888);

  const R = params.cityRadius;
  const heightRange = metrics.maxHeight - metrics.minHeight;
  const bound = TERRAIN_SIZE * 0.44; // Evitar bordes extremos del mapa (±176 m)

  let attempts = 0;
  const maxAttempts = maxTrees * 6;

  const position = new THREE.Vector3();
  const scale = new THREE.Vector3();
  const rotation = new THREE.Euler();
  const quaternion = new THREE.Quaternion();

  while (trees.length < maxTrees && attempts < maxAttempts) {
    attempts++;

    // Muestreo en coordenadas polares fuera de la ciudad
    const angle = rng() * Math.PI * 2;
    const dist = R * 1.05 + rng() * (bound - R * 1.05);

    const x = Math.cos(angle) * dist;
    const z = Math.sin(angle) * dist;

    if (Math.abs(x) > bound || Math.abs(z) > bound) continue;

    // Altura en el punto
    const y = evaluateTerrainHeight(
      x,
      z,
      params,
      perlin,
      metrics.centerHeight,
      metrics.lotBaseHeight
    );

    // Descartar bajo el agua o demasiado cerca de la orilla
    if (params.showWater && params.terrainType !== 'plano' && y < metrics.waterLevel + 0.6) {
      continue;
    }

    // Descartar en nieves altas
    const normH = heightRange > 0.01 ? (y - metrics.minHeight) / heightRange : 0.5;
    if (normH > 0.75) continue;

    // Evaluar pendiente local
    const eps = 0.8;
    const hL = evaluateTerrainHeight(x - eps, z, params, perlin, metrics.centerHeight, metrics.lotBaseHeight);
    const hR = evaluateTerrainHeight(x + eps, z, params, perlin, metrics.centerHeight, metrics.lotBaseHeight);
    const hD = evaluateTerrainHeight(x, z - eps, params, perlin, metrics.centerHeight, metrics.lotBaseHeight);
    const hU = evaluateTerrainHeight(x, z + eps, params, perlin, metrics.centerHeight, metrics.lotBaseHeight);
    const slope = Math.sqrt(((hR - hL) / (2 * eps)) ** 2 + ((hU - hD) / (2 * eps)) ** 2);

    // Descartar en pendientes escarpadas o acantilados de roca
    if (slope > 0.38) continue;

    // Escala y rotación aleatoria pero armónica
    const s = 0.75 + rng() * 0.6; // Altura entre ~2.5 y 4.5 m
    position.set(x, y, z);
    scale.set(s, s, s);
    rotation.set(0, rng() * Math.PI * 2, 0);
    quaternion.setFromEuler(rotation);

    const matrix = new THREE.Matrix4();
    matrix.compose(position, quaternion, scale);

    const baseCol = FOLIAGE_COLORS[Math.floor(rng() * FOLIAGE_COLORS.length)];
    const color = baseCol.clone();
    // Variación sutil de luminosidad
    const tint = (rng() - 0.5) * 0.08;
    color.offsetHSL(0, 0, tint);

    trees.push({ matrix, color });
  }

  return trees;
}

