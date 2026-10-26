/**
 * Tipos e interfaces centrales para Terra Urbis
 */

export type TerrainType = 'plano' | 'ondulado' | 'montanoso';

export type CameraPreset = 'aerea' | 'planta' | 'calle';

export interface WorldParams {
  // Generación matemática
  seed: number;
  terrainType: TerrainType;
  relief: number;       // 0 - 60 m (def: 14)
  terrainScale: number; // 0.4 - 4 (def: 1.2)
  octaves: number;      // 1 - 6 (def: 5)

  // Ciudad
  cityRadius: number;       // 30 - 180 m (def: 110)
  cityDensity: number;      // 20 - 100 % (def: 75)
  maxBuildingHeight: number;// 10 - 120 m (def: 55)
  urbanLeveling: number;    // 0 - 100 % (def: 70)

  // Lote de proyecto
  lotWidth: number;         // 10 - 60 m (def: 25)
  lotDepth: number;         // 10 - 60 m (def: 25)
  lotHeight: number;        // 5 - 80 m (def: 20)
  lotX: number;             // Posición X en el plano (por defecto centrado o cerca del centro)
  lotZ: number;             // Posición Z en el plano

  // Visualización y ambiente
  hourOfDay: number;        // 6 - 18 h (def: 15)
  showWater: boolean;       // def: true
  showLotVolume: boolean;   // def: true
}

export interface BuildingData {
  x: number;
  y: number; // Nivel base del edificio sobre el terreno
  z: number;
  width: number;
  depth: number;
  height: number;
  color: [number, number, number]; // RGB normalizado [0-1]
}

export interface TerrainMetrics {
  minHeight: number;
  maxHeight: number;
  waterLevel: number;
  centerHeight: number;
  lotBaseHeight: number;
}

export interface WorldStats {
  buildingCount: number;
  maxSurroundingHeight: number;
  heightDelta: number;
  lotArea: number;
}
