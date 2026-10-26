/**
 * Terra Urbis - Componente de visualización 3D con Three.js
 * Gestiona el canvas WebGL, OrbitControls, sombras dinámicas de alta resolución,
 * ciclo solar paramétrico, malla de terreno con colores por vértice, InstancedMesh de edificios,
 * volumen del lote de proyecto y transiciones suaves de cámara.
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { WorldParams, BuildingData, TerrainMetrics, CameraPreset } from '../types';

interface SceneProps {
  params: WorldParams;
  terrainGeometry: THREE.BufferGeometry | null;
  waterGeometry: THREE.BufferGeometry | null;
  metrics: TerrainMetrics;
  buildings: BuildingData[];
  cameraPreset: CameraPreset | null;
  onCameraPresetApplied: () => void;
}

/**
 * Calcula los colores de cielo, luz y niebla según la hora del día (6 a 18 h)
 */
function getSunEnvironment(hour: number) {
  // a varía de 0 (6h) a PI (18h)
  const a = ((hour - 6) / 12) * Math.PI;

  // Posición del sol: (-cos(a)*260, sin(a)*260 + 30, 90)
  const sunPos = new THREE.Vector3(
    -Math.cos(a) * 260,
    Math.sin(a) * 260 + 30,
    90
  );

  // Parámetro de elevación solar [0: horizonte, 1: cenit a las 12h]
  const sunHeightFactor = Math.sin(a);

  // Colores dinámicos
  const skyColor = new THREE.Color();
  const fogColor = new THREE.Color();
  const lightColor = new THREE.Color();
  let lightIntensity = 2.2;
  let ambientIntensity = 0.55;

  if (hour < 8.5) {
    // Amanecer: tonos dorados, anaranjados y rosados
    const t = (hour - 6) / 2.5;
    skyColor.setRGB(0.92, 0.65 + 0.15 * t, 0.55 + 0.3 * t);
    fogColor.setRGB(0.90, 0.70 + 0.1 * t, 0.65 + 0.2 * t);
    lightColor.setRGB(1.0, 0.78, 0.55);
    lightIntensity = 1.6 + 0.6 * t;
    ambientIntensity = 0.45 + 0.1 * t;
  } else if (hour > 15.5) {
    // Atardecer: tonos cálidos ambarinos y magenta suave
    const t = (18 - hour) / 2.5;
    skyColor.setRGB(0.94, 0.62 + 0.18 * t, 0.52 + 0.32 * t);
    fogColor.setRGB(0.88, 0.68 + 0.12 * t, 0.60 + 0.25 * t);
    lightColor.setRGB(1.0, 0.74, 0.48);
    lightIntensity = 1.5 + 0.7 * t;
    ambientIntensity = 0.42 + 0.12 * t;
  } else {
    // Mediodía y horas centrales: cielo azul nítido arquitectónico
    skyColor.setRGB(0.55 + 0.1 * sunHeightFactor, 0.75 + 0.08 * sunHeightFactor, 0.95);
    fogColor.setRGB(0.72 + 0.08 * sunHeightFactor, 0.82 + 0.06 * sunHeightFactor, 0.94);
    lightColor.setRGB(1.0, 0.98, 0.94);
    lightIntensity = 2.4;
    ambientIntensity = 0.62;
  }

  return { sunPos, skyColor, fogColor, lightColor, lightIntensity, ambientIntensity };
}

export const Scene: React.FC<SceneProps> = ({
  params,
  terrainGeometry,
  waterGeometry,
  metrics,
  buildings,
  cameraPreset,
  onCameraPresetApplied,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Referencias persistentes a objetos Three.js
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Luces
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  // Mallas en escena
  const terrainMeshRef = useRef<THREE.Mesh | null>(null);
  const waterMeshRef = useRef<THREE.Mesh | null>(null);
  const instancedBuildingsRef = useRef<THREE.InstancedMesh | null>(null);
  const lotGroupRef = useRef<THREE.Group | null>(null);

  // Animación de cámara
  const cameraTargetPos = useRef<THREE.Vector3 | null>(null);
  const controlsTargetPos = useRef<THREE.Vector3 | null>(null);

  // 1. Inicialización del motor Three.js (una sola vez)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Niebla inicial
    const fog = new THREE.Fog(0x8ac4f2, 160, 520);
    scene.fog = fog;

    // Cámara con perspectiva arquitectónica
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.5, 1200);
    camera.position.set(160, 150, 160);
    cameraRef.current = camera;

    // Renderer con sombras suaves y mapeo tonal ACES Filmic
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls con amortiguación suave
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Evita meterse bajo el plano
    controls.minDistance = 10;
    controls.maxDistance = 550;
    controls.target.set(0, 10, 0);
    controlsRef.current = controls;

    // Iluminación solar (Luz direccional con sombras)
    const dirLight = new THREE.DirectionalLight(0xfff9e6, 2.2);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.bias = -0.0004;
    dirLight.shadow.normalBias = 0.02;

    // Frustum ortográfico de sombras amplio para abarcar la ciudad (±230)
    dirLight.shadow.camera.left = -230;
    dirLight.shadow.camera.right = 230;
    dirLight.shadow.camera.top = 230;
    dirLight.shadow.camera.bottom = -230;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 600;

    scene.add(dirLight);
    scene.add(dirLight.target);
    dirLightRef.current = dirLight;

    // Luz hemisférica (cielo y suelo) para un sombreado arquitectónico natural
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.45);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Grupo para el lote de proyecto
    const lotGroup = new THREE.Group();
    scene.add(lotGroup);
    lotGroupRef.current = lotGroup;

    // Bucle de renderizado continuo
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Transición suave de cámara hacia preset si está activa
      if (cameraTargetPos.current && controlsTargetPos.current) {
        camera.position.lerp(cameraTargetPos.current, 0.06);
        controls.target.lerp(controlsTargetPos.current, 0.06);

        if (
          camera.position.distanceTo(cameraTargetPos.current) < 0.1 &&
          controls.target.distanceTo(controlsTargetPos.current) < 0.1
        ) {
          camera.position.copy(cameraTargetPos.current);
          controls.target.copy(controlsTargetPos.current);
          cameraTargetPos.current = null;
          controlsTargetPos.current = null;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Redimensionamiento responsive
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // 2. Actualización de iluminación y sol (reactivo al slider de hora sin tocar mallas)
  useEffect(() => {
    const scene = sceneRef.current;
    const dirLight = dirLightRef.current;
    const hemiLight = hemiLightRef.current;
    const ambientLight = ambientLightRef.current;
    if (!scene || !dirLight || !hemiLight || !ambientLight) return;

    const env = getSunEnvironment(params.hourOfDay);

    // Posición del sol
    dirLight.position.copy(env.sunPos);
    dirLight.color.copy(env.lightColor);
    dirLight.intensity = env.lightIntensity;
    dirLight.target.position.set(0, 0, 0);
    dirLight.target.updateMatrixWorld();

    // Luces de relleno
    hemiLight.color.copy(env.lightColor);
    hemiLight.intensity = env.ambientIntensity;
    ambientLight.intensity = env.ambientIntensity * 0.45;

    // Color de fondo y niebla
    scene.background = env.skyColor;
    if (scene.fog && scene.fog instanceof THREE.Fog) {
      scene.fog.color.copy(env.fogColor);
    }
  }, [params.hourOfDay]);

  // 3. Actualización de la malla del terreno
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Liberar malla anterior
    if (terrainMeshRef.current) {
      scene.remove(terrainMeshRef.current);
      terrainMeshRef.current.geometry.dispose();
      (terrainMeshRef.current.material as THREE.Material).dispose();
      terrainMeshRef.current = null;
    }

    if (!terrainGeometry) return;

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.82,
      metalness: 0.08,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(terrainGeometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);
    terrainMeshRef.current = mesh;
  }, [terrainGeometry]);

  // 4. Actualización del plano de agua
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (waterMeshRef.current) {
      scene.remove(waterMeshRef.current);
      waterMeshRef.current.geometry.dispose();
      (waterMeshRef.current.material as THREE.Material).dispose();
      waterMeshRef.current = null;
    }

    if (!waterGeometry || !params.showWater || params.terrainType === 'plano') return;

    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x328aa8,
      roughness: 0.12,
      metalness: 0.2,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(waterGeometry, waterMaterial);
    mesh.position.y = metrics.waterLevel;
    mesh.receiveShadow = true;
    scene.add(mesh);
    waterMeshRef.current = mesh;
  }, [waterGeometry, params.showWater, params.terrainType, metrics.waterLevel]);

  // 5. Actualización de edificios mediante InstancedMesh
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (instancedBuildingsRef.current) {
      scene.remove(instancedBuildingsRef.current);
      instancedBuildingsRef.current.geometry.dispose();
      (instancedBuildingsRef.current.material as THREE.Material).dispose();
      instancedBuildingsRef.current = null;
    }

    if (buildings.length === 0) return;

    const count = buildings.length;
    // Caja unitaria de 1 x 1 x 1
    const baseGeometry = new THREE.BoxGeometry(1, 1, 1);
    // Ajustar pivote a la base de la caja para simplificar la escala vertical
    baseGeometry.translate(0, 0.5, 0);

    const material = new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.15,
    });

    const instancedMesh = new THREE.InstancedMesh(baseGeometry, material, count);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    const color = new THREE.Color();
    const quaternion = new THREE.Quaternion(); // Sin rotación adicional sobre la cuadrícula

    for (let i = 0; i < count; i++) {
      const b = buildings[i];
      position.set(b.x, b.y, b.z);
      scale.set(b.width, b.height, b.depth);
      matrix.compose(position, quaternion, scale);
      instancedMesh.setMatrixAt(i, matrix);

      color.setRGB(b.color[0], b.color[1], b.color[2]);
      instancedMesh.setColorAt(i, color);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    scene.add(instancedMesh);
    instancedBuildingsRef.current = instancedMesh;
  }, [buildings]);

  // 6. Actualización del "Lote del proyecto" (volumen propuesto translúcido y aristas)
  useEffect(() => {
    const lotGroup = lotGroupRef.current;
    if (!lotGroup) return;

    // Limpiar hijos anteriores
    while (lotGroup.children.length > 0) {
      const child = lotGroup.children[0];
      lotGroup.remove(child);
      if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    }

    const { lotWidth, lotDepth, lotHeight, lotX, lotZ, showLotVolume } = params;
    const baseY = metrics.lotBaseHeight;

    // Plataforma o losa nivelada en la base del lote (indica el suelo nivelado)
    const platformGeo = new THREE.BoxGeometry(lotWidth + 1.2, 0.25, lotDepth + 1.2);
    platformGeo.translate(0, -0.125, 0);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x4a4e52,
      roughness: 0.8,
      metalness: 0.1,
    });
    const platformMesh = new THREE.Mesh(platformGeo, platformMat);
    platformMesh.position.set(lotX, baseY, lotZ);
    platformMesh.receiveShadow = true;
    platformMesh.castShadow = true;
    lotGroup.add(platformMesh);

    // Si la opción de mostrar volumen propuesto está activa
    if (showLotVolume) {
      // Caja naranja translúcida del proyecto
      const boxGeo = new THREE.BoxGeometry(lotWidth, lotHeight, lotDepth);
      boxGeo.translate(0, lotHeight / 2, 0);

      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xff6b1a, // Naranja vibrante de proyecto
        roughness: 0.35,
        metalness: 0.15,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      });

      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.set(lotX, baseY, lotZ);
      boxMesh.castShadow = true;
      boxMesh.receiveShadow = true;
      lotGroup.add(boxMesh);

      // Aristas blancas en los bordes del volumen
      const edgesGeo = new THREE.EdgesGeometry(boxGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 2,
      });
      const edgeLines = new THREE.LineSegments(edgesGeo, edgeMat);
      edgeLines.position.set(lotX, baseY, lotZ);
      lotGroup.add(edgeLines);
    }
  }, [
    params.lotWidth,
    params.lotDepth,
    params.lotHeight,
    params.lotX,
    params.lotZ,
    params.showLotVolume,
    metrics.lotBaseHeight,
  ]);

  // 7. Gestión de presets de cámara (Aérea, Planta, Calle)
  useEffect(() => {
    if (!cameraPreset || !cameraRef.current || !controlsRef.current) return;

    const { lotX, lotZ, lotHeight } = params;
    const baseY = metrics.lotBaseHeight;

    if (cameraPreset === 'aerea') {
      // Vista aérea isométrica clásica
      cameraTargetPos.current = new THREE.Vector3(160, 150, 160);
      controlsTargetPos.current = new THREE.Vector3(0, 10, 0);
    } else if (cameraPreset === 'planta') {
      // Vista cenital de planta (top-down)
      cameraTargetPos.current = new THREE.Vector3(0, 310, 0.1);
      controlsTargetPos.current = new THREE.Vector3(0, 0, 0);
    } else if (cameraPreset === 'calle') {
      // Vista peatonal a nivel de calle enfocando el lote
      cameraTargetPos.current = new THREE.Vector3(lotX - 30, baseY + 3.5, lotZ + 30);
      controlsTargetPos.current = new THREE.Vector3(lotX, baseY + Math.min(lotHeight * 0.4, 12), lotZ);
    }

    onCameraPresetApplied();
  }, [cameraPreset, params.lotX, params.lotZ, params.lotHeight, metrics.lotBaseHeight, onCameraPresetApplied]);

  return (
    <div
      ref={containerRef}
      className="scene-canvas-container"
      role="region"
      aria-label="Visualizador 3D interactivo de Terra Urbis"
    />
  );
};
