/**
 * Terra Urbis - MiniScene para Diapositivas Interactivas
 * Versión liviana y autónoma del generador 3D que reutiliza noise.ts, terrain.ts y city.ts.
 * Diseñada para un montaje/desmontaje rápido, bajo consumo de GPU y liberación estricta
 * de memoria WebGL al salir de cada diapositiva.
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TerrainType, WorldParams } from '../types';
import { PerlinNoise } from '../lib/noise';
import { generateTerrainMesh } from '../lib/terrain';
import { generateCityBuildings } from '../lib/city';

export interface MiniSceneProps {
  seed: number;
  octaves?: number;
  hourOfDay?: number;
  terrainType?: TerrainType;
  relief?: number;
  terrainScale?: number;
  showBuildings?: boolean;
  showLot?: boolean;
  autoRotate?: boolean;
  cameraPreset?: 'aerea' | 'diagonal' | 'frontal';
  className?: string;
}

export const MiniScene: React.FC<MiniSceneProps> = ({
  seed,
  octaves = 5,
  hourOfDay = 15,
  terrainType = 'ondulado',
  relief = 14,
  terrainScale = 1.2,
  showBuildings = true,
  showLot = true,
  autoRotate = false,
  cameraPreset = 'diagonal',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Referencias persistentes
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);

  // Mallas activas para liberar
  const terrainMeshRef = useRef<THREE.Mesh | null>(null);
  const buildingsMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const lotGroupRef = useRef<THREE.Group | null>(null);

  // 1. Inicialización de Three.js (una sola vez por montaje de diapositiva)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x8ac4f2);

    const fog = new THREE.Fog(0x8ac4f2, 140, 480);
    scene.fog = fog;

    // Cámara
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.5, 900);
    if (cameraPreset === 'aerea') {
      camera.position.set(130, 140, 130);
    } else if (cameraPreset === 'frontal') {
      camera.position.set(0, 90, 180);
    } else {
      camera.position.set(150, 110, 150);
    }
    cameraRef.current = camera;

    // Renderer liviano con antialias y sombras estándar
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'default',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.minDistance = 20;
    controls.maxDistance = 450;
    controls.target.set(0, 5, 0);

    // Respetar prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    controls.autoRotate = autoRotate && !prefersReducedMotion;
    controls.autoRotateSpeed = 0.8;
    controlsRef.current = controls;

    // Iluminación
    const dirLight = new THREE.DirectionalLight(0xfff6dd, 2.2);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0002;
    dirLight.shadow.camera.left = -180;
    dirLight.shadow.camera.right = 180;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = -180;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 500;
    scene.add(dirLight);
    scene.add(dirLight.target);
    dirLightRef.current = dirLight;

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.55);
    hemiLight.position.set(0, 180, 0);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const lotGroup = new THREE.Group();
    scene.add(lotGroup);
    lotGroupRef.current = lotGroup;

    // Bucle de renderizado
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Liberación estricta de memoria al desmontar
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      controls.dispose();
      renderer.dispose();

      // Liberar mallas
      if (terrainMeshRef.current) {
        terrainMeshRef.current.geometry.dispose();
        (terrainMeshRef.current.material as THREE.Material).dispose();
      }
      if (buildingsMeshRef.current) {
        buildingsMeshRef.current.geometry.dispose();
        (buildingsMeshRef.current.material as THREE.Material).dispose();
      }

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // 2. Actualización de luz solar y cielo según hora
  useEffect(() => {
    const scene = sceneRef.current;
    const dirLight = dirLightRef.current;
    const hemiLight = hemiLightRef.current;
    if (!scene || !dirLight || !hemiLight) return;

    // Cálculo solar simplificado
    const a = ((hourOfDay - 5.5) / 14) * Math.PI;
    const sunPos = new THREE.Vector3(-Math.cos(a) * 240, Math.sin(a) * 240 + 15, 80);

    dirLight.position.copy(sunPos);
    dirLight.target.position.set(0, 0, 0);
    dirLight.target.updateMatrixWorld();

    const isSunset = hourOfDay > 16 || hourOfDay < 8;
    const skyCol = isSunset ? new THREE.Color(0xf69d65) : new THREE.Color(0x7ec1f2);
    const lightCol = isSunset ? new THREE.Color(0xffbf80) : new THREE.Color(0xfffaea);

    scene.background = skyCol;
    if (scene.fog && scene.fog instanceof THREE.Fog) {
      scene.fog.color.copy(skyCol);
    }
    dirLight.color.copy(lightCol);
    hemiLight.color.copy(lightCol);
  }, [hourOfDay]);

  // 3. Generación y actualización de terreno, edificios y lote
  useEffect(() => {
    const scene = sceneRef.current;
    const lotGroup = lotGroupRef.current;
    if (!scene || !lotGroup) return;

    // Limpiar geometrías anteriores
    if (terrainMeshRef.current) {
      scene.remove(terrainMeshRef.current);
      terrainMeshRef.current.geometry.dispose();
      (terrainMeshRef.current.material as THREE.Material).dispose();
      terrainMeshRef.current = null;
    }

    if (buildingsMeshRef.current) {
      scene.remove(buildingsMeshRef.current);
      buildingsMeshRef.current.geometry.dispose();
      (buildingsMeshRef.current.material as THREE.Material).dispose();
      buildingsMeshRef.current = null;
    }

    while (lotGroup.children.length > 0) {
      const child = lotGroup.children[0];
      lotGroup.remove(child);
      if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
        else child.material.dispose();
      }
    }

    // Parámetros de generación reutilizando la lógica exacta
    const params: WorldParams = {
      seed,
      terrainType,
      relief,
      terrainScale,
      octaves,
      cityRadius: 100,
      cityDensity: 70,
      maxBuildingHeight: 48,
      urbanLeveling: 70,
      lotWidth: 25,
      lotDepth: 25,
      lotHeight: 22,
      lotX: 0,
      lotZ: 0,
      hourOfDay,
      showWater: true,
      showLotVolume: true,
      quality: 'baja',
      contextMode: false,
      shadowStudy: false,
    };

    const perlin = new PerlinNoise(seed);
    const { geometry, metrics } = generateTerrainMesh(params, perlin);

    // Malla de terreno
    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.05,
    });
    const terrainMesh = new THREE.Mesh(geometry, terrainMat);
    terrainMesh.receiveShadow = true;
    terrainMesh.castShadow = true;
    scene.add(terrainMesh);
    terrainMeshRef.current = terrainMesh;

    // Edificios si están habilitados
    if (showBuildings) {
      const buildings = generateCityBuildings(params, perlin, metrics);
      if (buildings.length > 0) {
        const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        boxGeo.translate(0, 0.5, 0);

        const bldgMat = new THREE.MeshStandardMaterial({
          roughness: 0.55,
          metalness: 0.15,
        });

        const instancedMesh = new THREE.InstancedMesh(boxGeo, bldgMat, buildings.length);
        instancedMesh.castShadow = true;
        instancedMesh.receiveShadow = true;

        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3();
        const scale = new THREE.Vector3();
        const color = new THREE.Color();
        const quat = new THREE.Quaternion();

        for (let i = 0; i < buildings.length; i++) {
          const b = buildings[i];
          position.set(b.x, b.y, b.z);
          scale.set(b.width, b.height, b.depth);
          matrix.compose(position, quat, scale);
          instancedMesh.setMatrixAt(i, matrix);

          color.setRGB(b.color[0], b.color[1], b.color[2]);
          instancedMesh.setColorAt(i, color);
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

        scene.add(instancedMesh);
        buildingsMeshRef.current = instancedMesh;
      }
    }

    // Lote de proyecto destacado
    if (showLot) {
      const baseY = metrics.lotBaseHeight;

      // Base nivelada
      const platGeo = new THREE.BoxGeometry(26, 0.3, 26);
      platGeo.translate(0, -0.15, 0);
      const platMat = new THREE.MeshStandardMaterial({ color: 0x3a3d40, roughness: 0.8 });
      const platMesh = new THREE.Mesh(platGeo, platMat);
      platMesh.position.set(0, baseY, 0);
      platMesh.receiveShadow = true;
      lotGroup.add(platMesh);

      // Volumen naranja
      const boxGeo = new THREE.BoxGeometry(25, 22, 25);
      boxGeo.translate(0, 11, 0);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xff6b1a,
        transparent: true,
        opacity: 0.65,
        roughness: 0.3,
        depthWrite: false,
      });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.set(0, baseY, 0);
      boxMesh.castShadow = true;
      boxMesh.receiveShadow = true;
      lotGroup.add(boxMesh);

      // Aristas blancas
      const edgesGeo = new THREE.EdgesGeometry(boxGeo);
      const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
      const edges = new THREE.LineSegments(edgesGeo, edgesMat);
      edges.position.set(0, baseY, 0);
      lotGroup.add(edges);
    }
  }, [seed, octaves, terrainType, relief, terrainScale, showBuildings, showLot]);

  return (
    <div
      ref={containerRef}
      className={`mini-scene-container ${className}`}
      role="region"
      aria-label="Visualizador 3D interactivo en miniatura"
    />
  );
};

