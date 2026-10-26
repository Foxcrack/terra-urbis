/**
 * Terra Urbis - Generación de la trama urbana y edificios procedurales
 * Implementa:
 * 1. Muestreo de celdas en cuadrícula ortogonal (paso 12 m, calles 4.4 m)
 * 2. Probabilidad radial de ocupación y cálculo de alturas según fórmula matemática
 * 3. Descarte de edificios en pendientes (> 7 m), bajo el agua o sobre el lote de proyecto
 * 4. Variación cromática arquitectónica en paleta beige / gris para InstancedMesh
 */

import { WorldParams, BuildingData, TerrainMetrics } from '../types';
import { PerlinNoise, mulberry32 } from './noise';
import { evaluateTerrainHeight, distanceToRect, STREET_STEP, STREET_WIDTH } from './terrain';

// Ancho máximo disponible para cada edificio dentro de la celda
const MAX_BUILDING_FOOTPRINT = STREET_STEP - STREET_WIDTH; // 7.6 m

// Paleta de tonos arquitectónicos (beige, gris, piedra, concreto, caliza)
const ARCHITECTURAL_COLORS: [number, number, number][] = [
  [0.88, 0.85, 0.80], // Caliza beige clara
  [0.82, 0.79, 0.74], // Travertino cálido
  [0.76, 0.77, 0.79], // Concreto gris moderno
  [0.85, 0.86, 0.88], // Panel arquitectónico claro
  [0.70, 0.72, 0.75], // Acero y vidrio grisáceo
  [0.91, 0.88, 0.83], // Arena suave
  [0.65, 0.67, 0.70], // Hormigón urbano visto
  [0.80, 0.75, 0.70], // Arena tostada suave
];

/**
 * Genera la lista de edificios que conforman la ciudad.
 */
export function generateCityBuildings(
  params: WorldParams,
  perlin: PerlinNoise,
  metrics: TerrainMetrics
): BuildingData[] {
  const buildings: BuildingData[] = [];
  const R = params.cityRadius;
  const density = params.cityDensity / 100; // Normalizado [0.2, 1.0]

  // Semilla derivada para la aleatoriedad de edificios
  const rng = mulberry32(params.seed + 9999);

  // Rango de la cuadrícula urbana (en múltiplos de 12 m)
  const maxGridSteps = Math.ceil(R / STREET_STEP) + 1;

  for (let gx = -maxGridSteps; gx <= maxGridSteps; gx++) {
    for (let gz = -maxGridSteps; gz <= maxGridSteps; gz++) {
      const cx = gx * STREET_STEP;
      const cz = gz * STREET_STEP;

      const d = Math.sqrt(cx * cx + cz * cz);
      // Fuera del radio de la ciudad
      if (d > R) continue;

      // 1. Probabilidad de que exista un edificio en esta celda:
      // densidad * (1 - 0.55 * d / R)
      const prob = density * (1.0 - 0.55 * (d / R));
      if (rng() > prob) continue;

      // 2. Comprobación de superposición con el lote de proyecto
      // Se evalúa la distancia al rectángulo del lote + margen de separación
      const distToLot = distanceToRect(
        cx,
        cz,
        params.lotX,
        params.lotZ,
        params.lotWidth,
        params.lotDepth
      );
      if (distToLot < MAX_BUILDING_FOOTPRINT * 0.7) {
        // Se superpone o está demasiado cerca del lote de proyecto
        continue;
      }

      // 3. Muestreo de altura del terreno en el centro y las 4 esquinas de la celda
      const halfSize = (MAX_BUILDING_FOOTPRINT / 2) * 0.95;
      const hCenter = evaluateTerrainHeight(
        cx,
        cz,
        params,
        perlin,
        metrics.centerHeight,
        metrics.lotBaseHeight
      );
      const h1 = evaluateTerrainHeight(
        cx - halfSize,
        cz - halfSize,
        params,
        perlin,
        metrics.centerHeight,
        metrics.lotBaseHeight
      );
      const h2 = evaluateTerrainHeight(
        cx + halfSize,
        cz - halfSize,
        params,
        perlin,
        metrics.centerHeight,
        metrics.lotBaseHeight
      );
      const h3 = evaluateTerrainHeight(
        cx - halfSize,
        cz + halfSize,
        params,
        perlin,
        metrics.centerHeight,
        metrics.lotBaseHeight
      );
      const h4 = evaluateTerrainHeight(
        cx + halfSize,
        cz + halfSize,
        params,
        perlin,
        metrics.centerHeight,
        metrics.lotBaseHeight
      );

      // Desnivel máximo entre las esquinas de la celda (pendiente local)
      const cellMinH = Math.min(hCenter, h1, h2, h3, h4);
      const cellMaxH = Math.max(hCenter, h1, h2, h3, h4);
      const slope = cellMaxH - cellMinH;

      // Se omiten edificios sobre pendientes mayores a 7 m
      if (slope > 7.0) {
        continue;
      }

      // Se omiten edificios bajo el nivel del agua
      if (params.showWater && params.terrainType !== 'plano' && cellMinH <= metrics.waterLevel + 0.4) {
        continue;
      }

      // 4. Altura matemática del edificio:
      // Altura = alturaMax * (0.15 + 0.85 * (1 - d/R)^1.5) * (0.4 + 0.9 * aleatorio), mínimo 4 m
      const radialFactor = Math.pow(Math.max(0, 1.0 - d / R), 1.5);
      const randomFactor = 0.4 + 0.9 * rng();
      let height = params.maxBuildingHeight * (0.15 + 0.85 * radialFactor) * randomFactor;
      if (height < 4.0) {
        height = 4.0;
      }

      // Variación sutil de huella en planta (ancho y fondo)
      const bWidth = 6.2 + rng() * (MAX_BUILDING_FOOTPRINT - 6.4);
      const bDepth = 6.2 + rng() * (MAX_BUILDING_FOOTPRINT - 6.4);

      // Selección de color de la paleta arquitectónica con ligera variación tonal
      const baseColor = ARCHITECTURAL_COLORS[Math.floor(rng() * ARCHITECTURAL_COLORS.length)];
      const tint = (rng() - 0.5) * 0.08;
      const r = Math.max(0, Math.min(1, baseColor[0] + tint));
      const g = Math.max(0, Math.min(1, baseColor[1] + tint));
      const b = Math.max(0, Math.min(1, baseColor[2] + tint));

      // Nivel base: el promedio para asegurar anclaje correcto al terreno
      const baseY = (cellMinH + cellMaxH) / 2;

      buildings.push({
        x: cx,
        y: baseY,
        z: cz,
        width: bWidth,
        depth: bDepth,
        height,
        color: [r, g, b],
      });
    }
  }

  return buildings;
}
