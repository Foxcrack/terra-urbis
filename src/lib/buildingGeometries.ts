/**
 * Terra Urbis - Geometrías arquitectónicas de edificios
 * Provee 3 tipos de morfología volumétrica para InstancedMesh:
 * 1. Torre simple con parapeto de azotea y remate técnico
 * 2. Torre con retranqueo (stepped tower escalonada)
 * 3. Bloque bajo con terraza/azotea practicable
 *
 * Todas las geometrías están normalizadas a huella unitaria [1 x 1] con pivote en la base (y = 0).
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface BuildingGeometryPack {
  simpleTower: THREE.BufferGeometry;
  steppedTower: THREE.BufferGeometry;
  lowBlock: THREE.BufferGeometry;
  dispose: () => void;
}

/**
 * 1. Torre simple: Cuerpo vertical principal + parapeto perimetral + núcleo de azotea
 */
function createSimpleTowerGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  // Cuerpo principal (0 a 0.95 de altura)
  const body = new THREE.BoxGeometry(1, 0.95, 1);
  body.translate(0, 0.95 / 2, 0);
  parts.push(body);

  // Parapeto perimetral en la azotea (0.95 a 1.0)
  // Borde norte y sur
  const parN = new THREE.BoxGeometry(1, 0.05, 0.05);
  parN.translate(0, 0.95 + 0.025, 0.475);
  parts.push(parN);

  const parS = new THREE.BoxGeometry(1, 0.05, 0.05);
  parS.translate(0, 0.95 + 0.025, -0.475);
  parts.push(parS);

  // Borde este y oeste
  const parE = new THREE.BoxGeometry(0.05, 0.05, 0.9);
  parE.translate(0.475, 0.95 + 0.025, 0);
  parts.push(parE);

  const parW = new THREE.BoxGeometry(0.05, 0.05, 0.9);
  parW.translate(-0.475, 0.95 + 0.025, 0);
  parts.push(parW);

  // Remate técnico / casetón de ascensores en el centro de la azotea
  const penthouse = new THREE.BoxGeometry(0.42, 0.09, 0.42);
  penthouse.translate(0, 0.95 + 0.045, 0);
  parts.push(penthouse);

  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return merged;
}

/**
 * 2. Torre con retranqueo (escalonada / stepped):
 * Podio inferior (0 a 0.55) + Torre superior retranqueada 25% (0.55 a 0.96) + Casetón (0.96 a 1.03)
 */
function createSteppedTowerGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  // Podio base
  const podiumH = 0.55;
  const podium = new THREE.BoxGeometry(1, podiumH, 1);
  podium.translate(0, podiumH / 2, 0);
  parts.push(podium);

  // Torre superior retranqueada
  const towerH = 0.41;
  const towerW = 0.72;
  const tower = new THREE.BoxGeometry(towerW, towerH, towerW);
  tower.translate(0, podiumH + towerH / 2, 0);
  parts.push(tower);

  // Parapeto sobre el retranqueo del podio
  const ledgeN = new THREE.BoxGeometry(1, 0.03, 0.04);
  ledgeN.translate(0, podiumH + 0.015, 0.48);
  parts.push(ledgeN);

  const ledgeS = new THREE.BoxGeometry(1, 0.03, 0.04);
  ledgeS.translate(0, podiumH + 0.015, -0.48);
  parts.push(ledgeS);

  // Remate superior / casetón
  const topCoreH = 0.07;
  const topCore = new THREE.BoxGeometry(0.32, topCoreH, 0.32);
  topCore.translate(0, podiumH + towerH + topCoreH / 2, 0);
  parts.push(topCore);

  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return merged;
}

/**
 * 3. Bloque bajo con azotea / terraza:
 * Bloque con proporción horizontal + parapeto perimetral continuo + casetón de acceso lateral
 */
function createLowBlockGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  // Cuerpo principal (0 a 0.90)
  const bodyH = 0.90;
  const body = new THREE.BoxGeometry(1, bodyH, 1);
  body.translate(0, bodyH / 2, 0);
  parts.push(body);

  // Parapeto perimetral completo
  const parH = 0.08;
  const parT = 0.06;

  const parN = new THREE.BoxGeometry(1, parH, parT);
  parN.translate(0, bodyH + parH / 2, 0.5 - parT / 2);
  parts.push(parN);

  const parS = new THREE.BoxGeometry(1, parH, parT);
  parS.translate(0, bodyH + parH / 2, -0.5 + parT / 2);
  parts.push(parS);

  const parE = new THREE.BoxGeometry(parT, parH, 1 - parT * 2);
  parE.translate(0.5 - parT / 2, bodyH + parH / 2, 0);
  parts.push(parE);

  const parW = new THREE.BoxGeometry(parT, parH, 1 - parT * 2);
  parW.translate(-0.5 + parT / 2, bodyH + parH / 2, 0);
  parts.push(parW);

  // Pequeño módulo de acceso a la terraza ubicado en una esquina
  const pavilion = new THREE.BoxGeometry(0.28, 0.12, 0.28);
  pavilion.translate(0.22, bodyH + 0.06, 0.22);
  parts.push(pavilion);

  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return merged;
}

/**
 * Inicializa el pack de geometrías arquitectónicas
 */
export function createBuildingGeometries(): BuildingGeometryPack {
  const simpleTower = createSimpleTowerGeometry();
  const steppedTower = createSteppedTowerGeometry();
  const lowBlock = createLowBlockGeometry();

  return {
    simpleTower,
    steppedTower,
    lowBlock,
    dispose: () => {
      simpleTower.dispose();
      steppedTower.dispose();
      lowBlock.dispose();
    },
  };
}

