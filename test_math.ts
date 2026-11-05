import { PerlinNoise } from './src/lib/noise';
import { generateTerrainMesh } from './src/lib/terrain';
import { generateCityBuildings } from './src/lib/city';
import { WorldParams } from './src/types';

const params: WorldParams = {
  seed: 42089,
  terrainType: 'ondulado',
  relief: 14,
  terrainScale: 1.2,
  octaves: 5,
  cityRadius: 110,
  cityDensity: 75,
  maxBuildingHeight: 55,
  urbanLeveling: 70,
  lotWidth: 25,
  lotDepth: 25,
  lotHeight: 20,
  lotX: 0,
  lotZ: 0,
  hourOfDay: 15,
  showWater: true,
  showLotVolume: true,
};

const perlin = new PerlinNoise(params.seed);
const { metrics } = generateTerrainMesh(params, perlin);
const buildings = generateCityBuildings(params, perlin, metrics);

console.log('Building count:', buildings.length);
console.log('Metrics:', metrics);
console.log('First 3 buildings:', buildings.slice(0, 3));
console.log('Last building:', buildings[buildings.length - 1]);

