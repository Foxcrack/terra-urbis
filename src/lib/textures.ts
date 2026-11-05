/**
 * Terra Urbis - Generación de texturas procedurales en Canvas
 * 1. Fachadas arquitectónicas (mapa difuso + mapa emisivo nocturno)
 * 2. Detalle de micro-relieve para el terreno
 * 3. Mapa de normales y ondas para el plano de agua
 */

import * as THREE from 'three';
import { mulberry32 } from './noise';

export interface FacadeTexturePack {
  diffuseMap: THREE.CanvasTexture;
  emissiveMap: THREE.CanvasTexture;
  dispose: () => void;
}

/**
 * Genera texturas procedurales para las fachadas de los edificios:
 * - Difuso: Ventanería en cuadrícula con marcos, antepechos y vidrio reflectante
 * - Emisivo: Ventanas iluminadas con tonos cálidos de noche
 */
export function createFacadeTextures(seed: number = 42089): FacadeTexturePack {
  const width = 512;
  const height = 512;

  // 1. Canvas Difuso
  const diffCanvas = document.createElement('canvas');
  diffCanvas.width = width;
  diffCanvas.height = height;
  const diffCtx = diffCanvas.getContext('2d')!;

  // 2. Canvas Emisivo (ventanas encendidas)
  const emissCanvas = document.createElement('canvas');
  emissCanvas.width = width;
  emissCanvas.height = height;
  const emissCtx = emissCanvas.getContext('2d')!;

  // Base difuso: fondo arquitectónico neutro claro (se modulará con el instanceColor)
  diffCtx.fillStyle = '#f0f2f5';
  diffCtx.fillRect(0, 0, width, height);

  // Base emisivo: completamente negro (sin emisión)
  emissCtx.fillStyle = '#000000';
  emissCtx.fillRect(0, 0, width, height);

  // Cuadrícula de ventanas: 8 columnas x 16 pisos
  const cols = 8;
  const rows = 16;
  const padX = 8;
  const padY = 6;
  const winW = (width - padX * (cols + 1)) / cols;
  const winH = (height - padY * (rows + 1)) / rows;

  const rng = mulberry32(seed + 443322);

  // Paleta de luces interiores nocturnas (cálidas doradas y ámbar)
  const nightLights = [
    '#ffe49e', // Oro cálido
    '#ffd56b', // Ámbar suave
    '#fff3cc', // Incandescente claro
    '#ffe9b3', // Suave residencial
  ];

  for (let r = 0; r < rows; r++) {
    const y = padY + r * (winH + padY);

    // Línea de antepecho / losa de piso en difuso
    diffCtx.fillStyle = '#d2d6dc';
    diffCtx.fillRect(0, y + winH, width, padY * 0.4);

    for (let c = 0; c < cols; c++) {
      const x = padX + c * (winW + padX);

      // Marco de la ventana
      diffCtx.fillStyle = '#2d333b';
      diffCtx.fillRect(x - 1, y - 1, winW + 2, winH + 2);

      // Vidrio oscuro reflectante en difuso
      diffCtx.fillStyle = '#1c2533';
      diffCtx.fillRect(x, y, winW, winH);

      // Brillo y sutil división de carpintería
      diffCtx.fillStyle = '#283445';
      diffCtx.fillRect(x + winW * 0.48, y, winW * 0.08, winH);

      // Sombra superior del vidrio
      diffCtx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      diffCtx.fillRect(x, y, winW, winH * 0.25);

      // Ventana emisiva (probabilidad de estar encendida de noche ~ 65%)
      const isLit = rng() > 0.35;
      if (isLit) {
        const lightColor = nightLights[Math.floor(rng() * nightLights.length)];
        emissCtx.fillStyle = lightColor;
        emissCtx.fillRect(x + 1, y + 1, winW - 2, winH - 2);

        // Cortina o división interior parcial
        if (rng() > 0.5) {
          emissCtx.fillStyle = 'rgba(0, 0, 0, 0.45)';
          emissCtx.fillRect(x + 1, y + 1, (winW - 2) * (0.2 + rng() * 0.4), winH - 2);
        }
      }
    }
  }

  const diffuseMap = new THREE.CanvasTexture(diffCanvas);
  diffuseMap.wrapS = THREE.RepeatWrapping;
  diffuseMap.wrapT = THREE.RepeatWrapping;
  diffuseMap.repeat.set(1, 1);
  diffuseMap.colorSpace = THREE.SRGBColorSpace;

  const emissiveMap = new THREE.CanvasTexture(emissCanvas);
  emissiveMap.wrapS = THREE.RepeatWrapping;
  emissiveMap.wrapT = THREE.RepeatWrapping;
  emissiveMap.repeat.set(1, 1);
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  return {
    diffuseMap,
    emissiveMap,
    dispose: () => {
      diffuseMap.dispose();
      emissiveMap.dispose();
    },
  };
}

/**
 * Textura procedural de ruido de alta frecuencia para evitar que el terreno
 * se vea borroso cerca de la cámara.
 */
export function createTerrainDetailTexture(): { texture: THREE.CanvasTexture; dispose: () => void } {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  // Ruido granular estocástico sutil con mezcla de frecuencias
  const rng = mulberry32(87654321);

  for (let i = 0; i < size * size; i++) {
    const idx = i * 4;
    // Variación sutil en torno a gris neutro 128
    const n = Math.floor(128 + (rng() - 0.5) * 44);
    data[idx] = n;
    data[idx + 1] = n;
    data[idx + 2] = n;
    data[idx + 3] = 255;
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(36, 36); // Repetir 36 veces a lo largo de los 400 m
  texture.colorSpace = THREE.SRGBColorSpace;

  return {
    texture,
    dispose: () => texture.dispose(),
  };
}

/**
 * Textura de normales procedurales para ondas suaves de agua
 */
export function createWaterNormalTexture(): { texture: THREE.CanvasTexture; dispose: () => void } {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const u = (x / size) * Math.PI * 4;
      const v = (y / size) * Math.PI * 4;

      const nx = Math.sin(u) * 0.35 + Math.cos(v * 1.5) * 0.25;
      const ny = Math.cos(v) * 0.35 + Math.sin(u * 1.5) * 0.25;

      // Codificar vector normal [-1, 1] a [0, 255]
      data[idx] = Math.floor((nx * 0.5 + 0.5) * 255);
      data[idx + 1] = Math.floor((ny * 0.5 + 0.5) * 255);
      data[idx + 2] = 230; // Z dominante (apuntando hacia arriba)
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);

  return {
    texture,
    dispose: () => texture.dispose(),
  };
}

