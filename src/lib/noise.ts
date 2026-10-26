/**
 * Terra Urbis - Biblioteca matemática de generación de ruido procedural
 * Implementa:
 * 1. PRNG determinista mulberry32
 * 2. Ruido de Perlin 2D clásico con tabla de permutación de 256 valores y fade cuíntico
 * 3. Movimiento Browniano Fraccional (fBm) con modos Plano, Ondulado y Montañoso (Ridged)
 */

import { TerrainType } from '../types';

/**
 * Generador de números pseudoaleatorios Mulberry32 (32-bit).
 * Dado un número entero positivo (semilla), produce números uniformes en [0, 1).
 */
export function mulberry32(seed: number): () => number {
  let s = Math.floor(seed) >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Función de interpolación lineal simple: lerp(a, b, t)
 */
export function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a);
}

/**
 * Función de interpolación cúbica suave (Smoothstep)
 */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Clase para Ruido de Perlin 2D clásico con semilla determinista.
 */
export class PerlinNoise {
  private p: Uint8Array = new Uint8Array(512);

  // 8 vectores de gradiente bidimensionales normalizados
  private readonly grad2: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [Math.SQRT1_2, Math.SQRT1_2],
    [-Math.SQRT1_2, Math.SQRT1_2],
    [Math.SQRT1_2, -Math.SQRT1_2],
    [-Math.SQRT1_2, -Math.SQRT1_2],
  ];

  constructor(seed: number) {
    this.reseed(seed);
  }

  /**
   * Baraja la tabla de permutación de 256 valores usando el PRNG mulberry32 de la semilla.
   */
  public reseed(seed: number): void {
    const rng = mulberry32(seed);
    const permutation = new Uint8Array(256);
    for (let i = 0; i < 256; i++) {
      permutation[i] = i;
    }

    // Barajado de Fisher-Yates con PRNG determinista
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const temp = permutation[i];
      permutation[i] = permutation[j];
      permutation[j] = temp;
    }

    // Duplicación a 512 para evitar operaciones módulo lentas al consultar p[X + 1]
    for (let i = 0; i < 256; i++) {
      this.p[i] = permutation[i];
      this.p[256 + i] = permutation[i];
    }
  }

  /**
   * Curva de suavizado cuíntica de Perlin: fade(t) = 6t^5 - 15t^4 + 10t^3.
   * Derivadas primera y segunda continuas en t=0 y t=1 (C2-continuity).
   */
  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  /**
   * Producto punto entre el vector de gradiente seleccionado por hash y el vector de distancia (x, y).
   */
  private dotGrad(hash: number, x: number, y: number): number {
    const g = this.grad2[hash & 7];
    return g[0] * x + g[1] * y;
  }

  /**
   * Muestra el ruido de Perlin 2D en las coordenadas (x, y).
   * Retorna un valor suavizado en el rango aproximado [-1, 1].
   */
  public noise2D(x: number, y: number): number {
    // Coordenadas enteras de la celda unitaria
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    // Coordenadas fraccionarias relativas dentro de la celda [0, 1)
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);

    // Factores de suavizado cuíntico
    const u = this.fade(xf);
    const v = this.fade(yf);

    // Consulta de hashes en las 4 esquinas de la celda
    const aa = this.p[this.p[X] + Y];
    const ab = this.p[this.p[X] + Y + 1];
    const ba = this.p[this.p[X + 1] + Y];
    const bb = this.p[this.p[X + 1] + Y + 1];

    // Contribuciones de gradiente en cada esquina
    const g00 = this.dotGrad(aa, xf, yf);
    const g10 = this.dotGrad(ba, xf - 1, yf);
    const g01 = this.dotGrad(ab, xf, yf - 1);
    const g11 = this.dotGrad(bb, xf - 1, yf - 1);

    // Interpolación bilineal suavizada
    const nx0 = lerp(g00, g10, u);
    const nx1 = lerp(g01, g11, u);
    return lerp(nx0, nx1, v);
  }
}

/**
 * Movimiento Browniano Fraccional (fBm) 2D con superposición de octavas armónicas.
 * 
 * @param x Coordenada X en metros
 * @param z Coordenada Z en metros
 * @param octaves Número de capas fractales (1 a 6)
 * @param terrainScale Factor de escala del terreno (0.4 a 4.0)
 * @param relief Amplitud de relieve vertical en metros (0 a 60 m)
 * @param terrainType Modo: 'plano' | 'ondulado' | 'montanoso'
 * @param perlin Instancia del ruido de Perlin 2D
 */
export function sampleFBM(
  x: number,
  z: number,
  octaves: number,
  terrainScale: number,
  relief: number,
  terrainType: TerrainType,
  perlin: PerlinNoise
): number {
  // Modo Plano: cota cero absoluta
  if (terrainType === 'plano' || relief <= 0) {
    return 0;
  }

  // Frecuencia base de muestreo (0.006 * escala)
  const baseFreq = 0.006 * terrainScale;
  const lacunarity = 2.0; // Duplicación de frecuencia por octava
  const gain = 0.5;       // Atenuación de amplitud por octava

  let total = 0;
  let frequency = baseFreq;
  let amplitude = 1.0;
  let maxPossibleAmplitude = 0;

  for (let i = 0; i < octaves; i++) {
    let n = perlin.noise2D(x * frequency, z * frequency);

    // Modo Montañoso: ridged noise (crestas afiladas)
    // n = 1 - |n|, luego n = n * n * 2 - 1
    if (terrainType === 'montanoso') {
      n = 1.0 - Math.abs(n);
      n = n * n * 2.0 - 1.0;
    }

    total += n * amplitude;
    maxPossibleAmplitude += amplitude;

    frequency *= lacunarity;
    amplitude *= gain;
  }

  // Normalización por la suma geométrica de amplitudes
  const normalized = total / (maxPossibleAmplitude > 0 ? maxPossibleAmplitude : 1.0);

  // Amplitud final: si es montañoso se multiplica por 1.6 según especificación
  const finalAmplitude = terrainType === 'montanoso' ? relief * 1.6 : relief;

  return normalized * finalAmplitude;
}
