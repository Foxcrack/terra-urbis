/**
 * Terra Urbis - Generación y coloración de la malla del terreno
 * Implementa:
 * 1. Campo de alturas combinando fBm + Nivelación urbana + Nivelación del Lote
 * 2. Asignación de colores por vértice (arena, pasto, roca, nieve, ciudad y asfalto)
 * 3. Geometría Three.js optimizada y cálculo del plano de agua
 */

import * as THREE from 'three';
import { PerlinNoise, sampleFBM, smoothstep, lerp } from './noise';
import { WorldParams, TerrainMetrics } from '../types';

export const TERRAIN_SIZE = 400; // 400 x 400 m
export const TERRAIN_SEGMENTS = 256; // 256 x 256 subdivisiones
export const STREET_STEP = 12; // Cuadrícula urbana cada 12 m
export const STREET_WIDTH = 4.4; // Ancho de calle ~4.4 m
export const LOT_BLENDING_MARGIN = 18; // Transición de 18 m alrededor del lote

/**
 * Calcula la distancia más corta de un punto (x, z) al borde de un rectángulo orientado a los ejes.
 * Si el punto está adentro, retorna 0.
 */
export function distanceToRect(
  x: number,
  z: number,
  rectCenterX: number,
  rectCenterZ: number,
  width: number,
  depth: number
): number {
  const dx = Math.max(0, Math.abs(x - rectCenterX) - width / 2);
  const dz = Math.max(0, Math.abs(z - rectCenterZ) - depth / 2);
  return Math.sqrt(dx * dx + dz * dz);
}

/**
 * Determina si unas coordenadas (x, z) corresponden a una calle de la cuadrícula.
 * Retorna un factor [0, 1] donde 1 es pleno asfalto y 0 es manzana/acera.
 */
export function getStreetFactor(x: number, z: number): number {
  const halfStep = STREET_STEP / 2;
  const halfStreet = STREET_WIDTH / 2;

  // Distancia perpendicular a la línea de calle más cercana
  const modX = Math.abs(((x % STREET_STEP) + STREET_STEP + halfStep) % STREET_STEP - halfStep);
  const modZ = Math.abs(((z % STREET_STEP) + STREET_STEP + halfStep) % STREET_STEP - halfStep);

  // Distancia al eje de calle más cercano
  const distToStreetX = halfStep - modX;
  const distToStreetZ = halfStep - modZ;

  const onStreetX = 1 - smoothstep(halfStreet * 0.7, halfStreet, distToStreetX);
  const onStreetZ = 1 - smoothstep(halfStreet * 0.7, halfStreet, distToStreetZ);

  return Math.max(onStreetX, onStreetZ);
}

/**
 * Evaluador analítico de altura del terreno en cualquier punto continuo (x, z).
 * Aplica sucesivamente:
 * 1. Altura natural por fBm
 * 2. Nivelación urbana hacia la cota central
 * 3. Nivelación del lote con smoothstep en los primeros 18 m
 */
export function evaluateTerrainHeight(
  x: number,
  z: number,
  params: WorldParams,
  perlin: PerlinNoise,
  cachedCenterHeight?: number,
  cachedLotBaseHeight?: number
): number {
  // 1. Altura natural por fBm
  const rawH = sampleFBM(
    x,
    z,
    params.octaves,
    params.terrainScale,
    params.relief,
    params.terrainType,
    perlin
  );

  if (params.terrainType === 'plano' || params.relief <= 0) {
    return 0;
  }

  // Cota del centro (0, 0)
  const centerH =
    cachedCenterHeight !== undefined
      ? cachedCenterHeight
      : sampleFBM(
          0,
          0,
          params.octaves,
          params.terrainScale,
          params.relief,
          params.terrainType,
          perlin
        );

  // 2. Máscara de ciudad y nivelación urbana
  const distCenter = Math.sqrt(x * x + z * z);
  const R = params.cityRadius;
  const cityMask = 1.0 - smoothstep(0.6 * R, 1.1 * R, distCenter);
  const urbanFactor = cityMask * (params.urbanLeveling / 100);

  // Altura tras nivelación urbana hacia la cota del centro
  const urbanH = lerp(rawH, centerH, urbanFactor);

  // 3. Nivelación del lote del proyecto en 18 m perimetrales
  // Altura del centro del lote
  const lotCenterH =
    cachedLotBaseHeight !== undefined
      ? cachedLotBaseHeight
      : (() => {
          const rawLot = sampleFBM(
            params.lotX,
            params.lotZ,
            params.octaves,
            params.terrainScale,
            params.relief,
            params.terrainType,
            perlin
          );
          const dLot = Math.sqrt(params.lotX * params.lotX + params.lotZ * params.lotZ);
          const maskLot = 1.0 - smoothstep(0.6 * R, 1.1 * R, dLot);
          return lerp(rawLot, centerH, maskLot * (params.urbanLeveling / 100));
        })();

  const distToLot = distanceToRect(
    x,
    z,
    params.lotX,
    params.lotZ,
    params.lotWidth,
    params.lotDepth
  );

  if (distToLot < LOT_BLENDING_MARGIN) {
    // Transición suave con smoothstep en los primeros 18 m
    const lotWeight = 1.0 - smoothstep(0, LOT_BLENDING_MARGIN, distToLot);
    return lerp(urbanH, lotCenterH, lotWeight);
  }

  return urbanH;
}

/**
 * Paleta de colores arquitectónica y geográfica
 */
const COLOR_WATER_SAND = new THREE.Color(0xd6be89); // Arena costera
const COLOR_GRASS_LOW = new THREE.Color(0x4a7c29);  // Pasto bajo verde vivo
const COLOR_GRASS_HIGH = new THREE.Color(0x6e8b3d); // Pasto de colina
const COLOR_ROCK = new THREE.Color(0x616568);       // Roca escarpada
const COLOR_SNOW = new THREE.Color(0xf0f5f8);       // Nieve cumbre
const COLOR_URBAN_BASE = new THREE.Color(0x757a7d); // Cemento / suelo urbano
const COLOR_ASPHALT = new THREE.Color(0x27292b);    // Asfalto oscuro de calles

/**
 * Genera la geometría del terreno con elevaciones y colores por vértice,
 * junto con las métricas del terreno y la geometría del agua.
 */
export function generateTerrainMesh(
  params: WorldParams,
  perlin: PerlinNoise
): {
  geometry: THREE.BufferGeometry;
  metrics: TerrainMetrics;
  waterGeometry: THREE.BufferGeometry | null;
} {
  const segments = TERRAIN_SEGMENTS;
  const count = segments + 1;
  const totalVertices = count * count;

  // Calculamos la cota de referencia en el centro
  const centerH =
    params.terrainType === 'plano' || params.relief <= 0
      ? 0
      : sampleFBM(
          0,
          0,
          params.octaves,
          params.terrainScale,
          params.relief,
          params.terrainType,
          perlin
        );

  // Calculamos la cota del lote
  const rawLotH =
    params.terrainType === 'plano' || params.relief <= 0
      ? 0
      : sampleFBM(
          params.lotX,
          params.lotZ,
          params.octaves,
          params.terrainScale,
          params.relief,
          params.terrainType,
          perlin
        );
  const dLot = Math.sqrt(params.lotX * params.lotX + params.lotZ * params.lotZ);
  const maskLot = 1.0 - smoothstep(0.6 * params.cityRadius, 1.1 * params.cityRadius, dLot);
  const lotBaseH =
    params.terrainType === 'plano' || params.relief <= 0
      ? 0
      : lerp(rawLotH, centerH, maskLot * (params.urbanLeveling / 100));

  // Geometría del plano en XZ
  const geometry = new THREE.PlaneGeometry(
    TERRAIN_SIZE,
    TERRAIN_SIZE,
    segments,
    segments
  );
  // Rotamos para que el plano quede horizontal en el eje Y
  geometry.rotateX(-Math.PI / 2);

  const posAttr = geometry.attributes.position as THREE.BufferAttribute;
  const positions = posAttr.array as Float32Array;
  const colors = new Float32Array(totalVertices * 3);

  let minH = Infinity;
  let maxH = -Infinity;

  // 1er pase: Calcular alturas definitivas y registrar min / max
  for (let i = 0; i < totalVertices; i++) {
    const idx = i * 3;
    const x = positions[idx];
    const z = positions[idx + 2];

    const y = evaluateTerrainHeight(
      x,
      z,
      params,
      perlin,
      centerH,
      lotBaseH
    );
    positions[idx + 1] = y;

    if (y < minH) minH = y;
    if (y > maxH) maxH = y;
  }

  // Si el terreno es plano, ajustamos cotas
  if (params.terrainType === 'plano' || params.relief <= 0 || !isFinite(minH)) {
    minH = 0;
    maxH = 0;
  }

  // Cota del agua: min + 25% del rango de alturas (si hay relieve)
  const heightRange = maxH - minH;
  const waterLevel = heightRange > 0.5 ? minH + 0.25 * heightRange : minH - 10;

  // 2do pase: Asignación de colores por vértice
  const tempCol = new THREE.Color();
  const R = params.cityRadius;

  for (let i = 0; i < totalVertices; i++) {
    const idx = i * 3;
    const x = positions[idx];
    const y = positions[idx + 1];
    const z = positions[idx + 2];

    // Factor normalizado de altura natural [0, 1]
    const normH = heightRange > 0.01 ? (y - minH) / heightRange : 0.5;

    // Gradiente natural: Arena -> Pasto -> Roca -> Nieve
    if (normH < 0.26) {
      // Zona costera / orilla
      tempCol.copy(COLOR_WATER_SAND);
    } else if (normH < 0.52) {
      // Pasto bajo a medio
      const t = (normH - 0.26) / 0.26;
      tempCol.lerpColors(COLOR_GRASS_LOW, COLOR_GRASS_HIGH, t);
    } else if (normH < 0.78) {
      // Pasto alto a roca
      const t = (normH - 0.52) / 0.26;
      tempCol.lerpColors(COLOR_GRASS_HIGH, COLOR_ROCK, t);
    } else {
      // Roca a nieve
      const t = Math.min(1.0, (normH - 0.78) / 0.22);
      tempCol.lerpColors(COLOR_ROCK, COLOR_SNOW, t);
    }

    // Influencia urbana y calles
    const distCenter = Math.sqrt(x * x + z * z);
    const cityMask = 1.0 - smoothstep(0.6 * R, 1.05 * R, distCenter);

    if (cityMask > 0.01) {
      // Tono urbano base
      tempCol.lerp(COLOR_URBAN_BASE, cityMask * 0.85);

      // Si coincide con un eje de calle, aplicar tono asfalto
      const streetFactor = getStreetFactor(x, z);
      if (streetFactor > 0.05) {
        tempCol.lerp(COLOR_ASPHALT, cityMask * streetFactor * 0.92);
      }
    }

    colors[idx] = tempCol.r;
    colors[idx + 1] = tempCol.g;
    colors[idx + 2] = tempCol.b;
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  posAttr.needsUpdate = true;
  geometry.computeVertexNormals();

  // Malla del plano de agua
  let waterGeometry: THREE.BufferGeometry | null = null;
  if (params.showWater && params.terrainType !== 'plano' && heightRange > 1.0) {
    waterGeometry = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, 32, 32);
    waterGeometry.rotateX(-Math.PI / 2);
  }

  const metrics: TerrainMetrics = {
    minHeight: minH,
    maxHeight: maxH,
    waterLevel,
    centerHeight: centerH,
    lotBaseHeight: lotBaseH,
  };

  return { geometry, metrics, waterGeometry };
}
