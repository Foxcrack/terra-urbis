/**
 * Terra Urbis - Componente de visualización 3D arquitectónica con Three.js
 * Gestiona:
 * - Renderizado con ACESFilmic Tone Mapping y sRGBColorSpace
 * - Sombras suaves de alta definición (PCFSoftShadowMap)
 * - Postprocesado arquitectónico: GTAO (Oclusión ambiental), UnrealBloom (brillo nocturno) y FXAA
 * - Cielo atmosférico dinámico (Sky de Three.js) con ciclo 24h (amanecer, mediodía, atardecer y noche)
 * - Malla de terreno con coloración por altura y pendiente, calles con aceras y textura de detalle
 * - Árboles procedurales exteriores en InstancedMesh
 * - Edificios con 3 geometrías distintas, texturas procedurales de fachadas y ventanas emisivas de noche
 * - Lote de proyecto destacado: volumen naranja translúcido, aristas blancas, anillo luminoso,
 *   etiqueta flotante 3D, modo contexto y estudio de sombras
 * - Transición de cámara cinemática suave (Aérea, Planta, Calle)
 * - Exportación de captura PNG
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import { WorldParams, BuildingData, TerrainMetrics, CameraPreset } from '../types';
import { PerlinNoise, mulberry32 } from '../lib/noise';
import { createFacadeTextures, createTerrainDetailTexture, createWaterNormalTexture } from '../lib/textures';
import { createBuildingGeometries } from '../lib/buildingGeometries';
import { createTreeGeometry, generateTreeInstances } from '../lib/tree';

interface SceneProps {
  params: WorldParams;
  terrainGeometry: THREE.BufferGeometry | null;
  waterGeometry: THREE.BufferGeometry | null;
  metrics: TerrainMetrics;
  buildings: BuildingData[];
  cameraPreset: CameraPreset | null;
  onCameraPresetApplied: () => void;
  triggerScreenshot?: boolean;
  onScreenshotTaken?: () => void;
}

/**
 * Entorno de iluminación solar y atmosférico según la hora (0 - 24 h)
 */
function getSunEnvironment(hour: number, shadowStudy: boolean) {
  const isDay = hour >= 5.5 && hour <= 19.5;
  const isNight = !isDay;

  const sunPos = new THREE.Vector3();
  const skyColor = new THREE.Color();
  const fogColor = new THREE.Color();
  const lightColor = new THREE.Color();
  const groundColor = new THREE.Color();

  let lightIntensity = 2.4;
  let ambientIntensity = 0.5;
  let emissiveIntensity = 0.0;

  if (isDay) {
    // a varía de 0 (5.5h amanecer) a PI (19.5h atardecer)
    const a = ((hour - 5.5) / 14) * Math.PI;
    sunPos.set(-Math.cos(a) * 280, Math.sin(a) * 280 + 12, 90);

    const sunElev = Math.sin(a);

    if (hour < 8.0) {
      // Amanecer dorado
      const t = (hour - 5.5) / 2.5;
      skyColor.setRGB(0.92, 0.65 + 0.15 * t, 0.55 + 0.3 * t);
      fogColor.setRGB(0.90, 0.70 + 0.1 * t, 0.65 + 0.2 * t);
      lightColor.setRGB(1.0, 0.78, 0.52);
      groundColor.setRGB(0.35, 0.30, 0.25);
      lightIntensity = 1.8 + 0.6 * t;
      ambientIntensity = 0.45 + 0.1 * t;
      emissiveIntensity = Math.max(0, 0.6 * (1 - t));
    } else if (hour > 16.5) {
      // Atardecer cálido ambarino
      const t = (19.5 - hour) / 3.0;
      skyColor.setRGB(0.95, 0.58 + 0.2 * t, 0.48 + 0.35 * t);
      fogColor.setRGB(0.88, 0.64 + 0.15 * t, 0.55 + 0.3 * t);
      lightColor.setRGB(1.0, 0.72, 0.45);
      groundColor.setRGB(0.35, 0.28, 0.24);
      lightIntensity = 1.6 + 0.8 * t;
      ambientIntensity = 0.42 + 0.12 * t;
      emissiveIntensity = Math.max(0, 0.8 * (1 - t));
    } else {
      // Mediodía arquitectónico azul
      skyColor.setRGB(0.52 + 0.1 * sunElev, 0.72 + 0.08 * sunElev, 0.95);
      fogColor.setRGB(0.70 + 0.08 * sunElev, 0.80 + 0.06 * sunElev, 0.93);
      lightColor.setRGB(1.0, 0.98, 0.94);
      groundColor.setRGB(0.38, 0.40, 0.42);
      lightIntensity = 2.6;
      ambientIntensity = 0.6;
      emissiveIntensity = 0.0;
    }
  } else {
    // Noche: iluminación por luna
    // Posición de la luna en el hemisferio
    const nightT = hour > 19.5 ? (hour - 19.5) / 10.0 : (hour + 4.5) / 10.0;
    const moonAngle = nightT * Math.PI;
    sunPos.set(Math.cos(moonAngle) * 250, Math.sin(moonAngle) * 220 + 30, -90);

    skyColor.setRGB(0.04, 0.07, 0.14);
    fogColor.setRGB(0.03, 0.06, 0.12);
    lightColor.setRGB(0.65, 0.75, 0.95); // Luz de luna azulada
    groundColor.setRGB(0.05, 0.08, 0.15);
    lightIntensity = 0.55;
    ambientIntensity = 0.30;
    emissiveIntensity = 1.25; // Ventanas encendidas de noche
  }

  // Si está activo el modo "Estudio de sombras", enfatizar la direccionalidad del sol
  if (shadowStudy && isDay) {
    lightIntensity *= 1.35;
    ambientIntensity *= 0.65;
  }

  return {
    isDay,
    isNight,
    sunPos,
    skyColor,
    fogColor,
    lightColor,
    groundColor,
    lightIntensity,
    ambientIntensity,
    emissiveIntensity,
  };
}

export const Scene: React.FC<SceneProps> = ({
  params,
  terrainGeometry,
  waterGeometry,
  metrics,
  buildings,
  cameraPreset,
  onCameraPresetApplied,
  triggerScreenshot,
  onScreenshotTaken,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Posición proyectada 2D para la etiqueta flotante del lote
  const [lotLabelPos, setLotLabelPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  // Referencias persistentes Three.js
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const skyRef = useRef<Sky | null>(null);
  const gtaoPassRef = useRef<GTAOPass | null>(null);
  const fxaaPassRef = useRef<ShaderPass | null>(null);

  // Luces
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  // Mallas en escena
  const terrainMeshRef = useRef<THREE.Mesh | null>(null);
  const terrainDetailTexRef = useRef<{ texture: THREE.CanvasTexture; dispose: () => void } | null>(null);
  const waterMeshRef = useRef<THREE.Mesh | null>(null);
  const waterNormalTexRef = useRef<{ texture: THREE.CanvasTexture; dispose: () => void } | null>(null);

  // Edificios
  const facadeTexPackRef = useRef<ReturnType<typeof createFacadeTextures> | null>(null);
  const buildingGeomsRef = useRef<ReturnType<typeof createBuildingGeometries> | null>(null);
  const instancedGroupRef = useRef<THREE.Group | null>(null);
  const buildingMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  // Árboles
  const treesGroupRef = useRef<THREE.Group | null>(null);

  // Lote de proyecto
  const lotGroupRef = useRef<THREE.Group | null>(null);

  // Transición suave de cámara (interpolación cinemática)
  const cameraTransition = useRef<{
    startPos: THREE.Vector3;
    targetPos: THREE.Vector3;
    startLookAt: THREE.Vector3;
    targetLookAt: THREE.Vector3;
    startTime: number;
    duration: number;
    active: boolean;
  }>({
    startPos: new THREE.Vector3(),
    targetPos: new THREE.Vector3(),
    startLookAt: new THREE.Vector3(),
    targetLookAt: new THREE.Vector3(),
    startTime: 0,
    duration: 900,
    active: false,
  });

  // Flag para capturar pantalla en el siguiente frame
  const takeScreenshotRef = useRef(false);

  // 1. Inicialización principal del motor Three.js y Postprocessing
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Niebla exponencial suave
    const fog = new THREE.FogExp2(0x8ac4f2, 0.0022);
    scene.fog = fog;

    // Cámara con perspectiva arquitectónica
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.5, 1400);
    camera.position.set(160, 150, 160);
    cameraRef.current = camera;

    // Renderer con tone mapping ACESFilmic y espacio de color sRGB correcto
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls con amortiguación
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Evita meterse bajo el plano
    controls.minDistance = 8;
    controls.maxDistance = 580;
    controls.target.set(0, 10, 0);
    controlsRef.current = controls;

    // Cielo atmosférico dinámico (Sky)
    const sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);
    skyRef.current = sky;

    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 8;
    skyUniforms['rayleigh'].value = 2.2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.82;

    // Luz solar / lunar direccional con mapa de sombras de alta precisión
    const dirLight = new THREE.DirectionalLight(0xfff9e6, 2.4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = params.quality === 'alta' ? 2048 : 1024;
    dirLight.shadow.mapSize.height = params.quality === 'alta' ? 2048 : 1024;
    dirLight.shadow.bias = -0.00018;
    dirLight.shadow.normalBias = 0.025;
    dirLight.shadow.camera.left = -230;
    dirLight.shadow.camera.right = 230;
    dirLight.shadow.camera.top = 230;
    dirLight.shadow.camera.bottom = -230;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 650;

    scene.add(dirLight);
    scene.add(dirLight.target);
    dirLightRef.current = dirLight;

    // Luz hemisférica (cielo y suelo)
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 220, 0);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.28);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Grupos dedicados
    const instancedGroup = new THREE.Group();
    scene.add(instancedGroup);
    instancedGroupRef.current = instancedGroup;

    const treesGroup = new THREE.Group();
    scene.add(treesGroup);
    treesGroupRef.current = treesGroup;

    const lotGroup = new THREE.Group();
    scene.add(lotGroup);
    lotGroupRef.current = lotGroup;

    // Geometrías y texturas compartidas
    facadeTexPackRef.current = createFacadeTextures(params.seed);
    buildingGeomsRef.current = createBuildingGeometries();
    terrainDetailTexRef.current = createTerrainDetailTexture();
    waterNormalTexRef.current = createWaterNormalTexture();

    // Postprocessing Composer
    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // GTAOPass para oclusión ambiental arquitectónica
    const gtaoPass = new GTAOPass(scene, camera, container.clientWidth, container.clientHeight);
    gtaoPass.output = GTAOPass.OUTPUT.Default;
    gtaoPass.blendIntensity = 0.75;
    gtaoPass.updateGtaoMaterial({
      radius: 9,
      distanceExponent: 1.3,
      thickness: 6,
    });
    composer.addPass(gtaoPass);
    gtaoPassRef.current = gtaoPass;

    // UnrealBloomPass sutil (para resaltar ventanas encendidas y el lote de noche)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.32, // Fuerza sutil
      0.4,  // Radio
      0.82  // Umbral alto para evitar lavar la escena
    );
    composer.addPass(bloomPass);

    // FXAA Antialiasing Pass
    const fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms['resolution'].value.x = 1 / (container.clientWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (container.clientHeight * pixelRatio);
    composer.addPass(fxaaPass);
    fxaaPassRef.current = fxaaPass;

    // OutputPass para gestión final de color sRGB
    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    // Bucle de renderizado continuo
    let animationFrameId: number;
    const tempVec = new THREE.Vector3();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // 1. Transición cinemática de cámara
      const trans = cameraTransition.current;
      if (trans.active) {
        const elapsed = performance.now() - trans.startTime;
        const rawProgress = Math.min(1.0, elapsed / trans.duration);
        // Easing cúbico in-out
        const t = rawProgress < 0.5 ? 4 * rawProgress * rawProgress * rawProgress : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

        camera.position.lerpVectors(trans.startPos, trans.targetPos, t);
        controls.target.lerpVectors(trans.startLookAt, trans.targetLookAt, t);

        if (rawProgress >= 1.0) {
          trans.active = false;
        }
      }

      controls.update();

      // 2. Ondulación suave de normales de agua
      if (waterNormalTexRef.current) {
        waterNormalTexRef.current.texture.offset.x = (time * 0.00004) % 1;
        waterNormalTexRef.current.texture.offset.y = (time * 0.00003) % 1;
      }

      // 3. Proyección 2D de la etiqueta flotante del lote
      if (lotGroupRef.current && params.showLotVolume && container) {
        tempVec.set(params.lotX, metrics.lotBaseHeight + params.lotHeight + 2.5, params.lotZ);
        tempVec.project(camera);

        const isBehind = tempVec.z > 1.0;
        if (!isBehind) {
          const px = (tempVec.x * 0.5 + 0.5) * container.clientWidth;
          const py = (-tempVec.y * 0.5 + 0.5) * container.clientHeight;
          setLotLabelPos({ x: px, y: py, visible: true });
        } else {
          setLotLabelPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));
        }
      }

      // 4. Renderizado según selector de calidad
      // En calidad 'baja' (móviles): render directo sin postprocesado
      if (params.quality === 'baja') {
        renderer.render(scene, camera);
      } else {
        composer.render();
      }

      // 5. Captura de pantalla si fue solicitada
      if (takeScreenshotRef.current) {
        takeScreenshotRef.current = false;
        try {
          // Renderizar con renderPass para obtener los datos limpios en canvas
          renderer.render(scene, camera);
          const dataUrl = renderer.domElement.toDataURL('image/png');
          const a = document.createElement('a');
          const cleanHour = Math.floor(params.hourOfDay);
          a.download = `terra-urbis-semilla-${params.seed}-${cleanHour}h.png`;
          a.href = dataUrl;
          a.click();
          if (onScreenshotTaken) onScreenshotTaken();
        } catch (err) {
          console.error('Error al capturar imagen:', err);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Responsive resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const pr = renderer.getPixelRatio();

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      composer.setSize(w, h);

      if (gtaoPassRef.current) {
        gtaoPassRef.current.setSize(w, h);
      }
      if (fxaaPassRef.current) {
        fxaaPassRef.current.material.uniforms['resolution'].value.x = 1 / (w * pr);
        fxaaPassRef.current.material.uniforms['resolution'].value.y = 1 / (h * pr);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      composer.dispose();

      if (facadeTexPackRef.current) facadeTexPackRef.current.dispose();
      if (buildingGeomsRef.current) buildingGeomsRef.current.dispose();
      if (terrainDetailTexRef.current) terrainDetailTexRef.current.dispose();
      if (waterNormalTexRef.current) waterNormalTexRef.current.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // 2. Captura de pantalla disparada desde props
  useEffect(() => {
    if (triggerScreenshot) {
      takeScreenshotRef.current = true;
    }
  }, [triggerScreenshot]);

  // 3. Ajuste de calidad gráfica dinámico
  useEffect(() => {
    const renderer = rendererRef.current;
    const dirLight = dirLightRef.current;
    const gtaoPass = gtaoPassRef.current;
    if (!renderer || !dirLight) return;

    if (params.quality === 'alta') {
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      dirLight.shadow.mapSize.set(2048, 2048);
      if (dirLight.shadow.map) dirLight.shadow.map.dispose();
      dirLight.shadow.map = null;
      if (gtaoPass) gtaoPass.enabled = true;
    } else if (params.quality === 'media') {
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      dirLight.shadow.mapSize.set(1024, 1024);
      if (dirLight.shadow.map) dirLight.shadow.map.dispose();
      dirLight.shadow.map = null;
      if (gtaoPass) gtaoPass.enabled = false;
    } else {
      // Baja (móviles)
      renderer.shadowMap.type = THREE.PCFShadowMap;
      dirLight.shadow.mapSize.set(1024, 1024);
      if (dirLight.shadow.map) dirLight.shadow.map.dispose();
      dirLight.shadow.map = null;
      if (gtaoPass) gtaoPass.enabled = false;
    }
  }, [params.quality]);

  // 4. Actualización de ciclo solar y atmósfera (24 horas)
  useEffect(() => {
    const scene = sceneRef.current;
    const dirLight = dirLightRef.current;
    const hemiLight = hemiLightRef.current;
    const ambientLight = ambientLightRef.current;
    const sky = skyRef.current;
    if (!scene || !dirLight || !hemiLight || !ambientLight) return;

    const env = getSunEnvironment(params.hourOfDay, params.shadowStudy);

    // Posición del sol / luna
    dirLight.position.copy(env.sunPos);
    dirLight.color.copy(env.lightColor);
    dirLight.intensity = env.lightIntensity;
    dirLight.target.position.set(0, 0, 0);
    dirLight.target.updateMatrixWorld();

    // Relleno ambiental y hemisférico
    hemiLight.color.copy(env.lightColor);
    hemiLight.groundColor.copy(env.groundColor);
    hemiLight.intensity = env.ambientIntensity;
    ambientLight.intensity = env.ambientIntensity * 0.5;

    // Niebla y fondo
    if (scene.fog && scene.fog instanceof THREE.FogExp2) {
      scene.fog.color.copy(env.fogColor);
    }
    scene.background = env.skyColor;

    // Actualizar cielo paramétrico Sky
    if (sky) {
      const uniforms = sky.material.uniforms;
      uniforms['sunPosition'].value.copy(env.sunPos);
      if (env.isNight) {
        sky.visible = false; // Fondo oscuro estelar para noche
      } else {
        sky.visible = true;
      }
    }

    // Actualizar intensidad emisiva de ventanas de edificios
    buildingMaterialsRef.current.forEach((mat) => {
      mat.emissiveIntensity = env.emissiveIntensity;
    });
  }, [params.hourOfDay, params.shadowStudy]);

  // 5. Actualización de la malla del terreno
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (terrainMeshRef.current) {
      scene.remove(terrainMeshRef.current);
      terrainMeshRef.current.geometry.dispose();
      (terrainMeshRef.current.material as THREE.Material).dispose();
      terrainMeshRef.current = null;
    }

    if (!terrainGeometry) return;

    const detailTex = terrainDetailTexRef.current?.texture;

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: detailTex || null,
      roughness: 0.82,
      metalness: 0.05,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(terrainGeometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);
    terrainMeshRef.current = mesh;
  }, [terrainGeometry]);

  // 6. Actualización del plano de agua con normales y reflejos
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

    const normalMap = waterNormalTexRef.current?.texture;

    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d7099,
      roughness: 0.1,
      metalness: 0.22,
      normalMap: normalMap || null,
      normalScale: new THREE.Vector2(0.35, 0.35),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(waterGeometry, waterMaterial);
    mesh.position.y = metrics.waterLevel;
    mesh.receiveShadow = true;
    scene.add(mesh);
    waterMeshRef.current = mesh;
  }, [waterGeometry, params.showWater, params.terrainType, metrics.waterLevel]);

  // 7. Generación de vegetación y árboles exteriores con InstancedMesh
  useEffect(() => {
    const treesGroup = treesGroupRef.current;
    if (!treesGroup) return;

    // Limpiar instancias previas
    while (treesGroup.children.length > 0) {
      const child = treesGroup.children[0];
      treesGroup.remove(child);
      if (child instanceof THREE.InstancedMesh) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    }

    if (params.terrainType === 'plano' && metrics.maxHeight === 0) return;

    const perlin = new PerlinNoise(params.seed);
    const treeInstances = generateTreeInstances(params, metrics, perlin, params.quality);

    if (treeInstances.length === 0) return;

    const treeGeom = createTreeGeometry();
    const treeMat = new THREE.MeshStandardMaterial({
      roughness: 0.72,
      metalness: 0.08,
    });

    const instancedTrees = new THREE.InstancedMesh(treeGeom, treeMat, treeInstances.length);
    instancedTrees.castShadow = true;
    instancedTrees.receiveShadow = true;

    for (let i = 0; i < treeInstances.length; i++) {
      instancedTrees.setMatrixAt(i, treeInstances[i].matrix);
      instancedTrees.setColorAt(i, treeInstances[i].color);
    }

    instancedTrees.instanceMatrix.needsUpdate = true;
    if (instancedTrees.instanceColor) instancedTrees.instanceColor.needsUpdate = true;

    treesGroup.add(instancedTrees);
  }, [
    params.seed,
    params.cityRadius,
    params.terrainType,
    params.relief,
    params.terrainScale,
    params.octaves,
    params.quality,
    params.showWater,
    metrics,
  ]);

  // 8. Actualización de edificios: InstancedMesh con 3 tipologías, texturas y modo contexto
  useEffect(() => {
    const instancedGroup = instancedGroupRef.current;
    if (!instancedGroup || !buildingGeomsRef.current || !facadeTexPackRef.current) return;

    // Limpiar instancias anteriores
    while (instancedGroup.children.length > 0) {
      const child = instancedGroup.children[0];
      instancedGroup.remove(child);
      if (child instanceof THREE.InstancedMesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    }

    buildingMaterialsRef.current = [];

    if (buildings.length === 0) return;

    const { diffuseMap, emissiveMap } = facadeTexPackRef.current;
    const { simpleTower, steppedTower, lowBlock } = buildingGeomsRef.current;

    const env = getSunEnvironment(params.hourOfDay, params.shadowStudy);

    // Material estándar con textura de fachada y emisión nocturna
    const standardBuildingMat = new THREE.MeshStandardMaterial({
      map: diffuseMap,
      emissiveMap: emissiveMap,
      emissive: new THREE.Color(0xffe28a),
      emissiveIntensity: env.emissiveIntensity,
      roughness: 0.52,
      metalness: 0.18,
    });
    buildingMaterialsRef.current.push(standardBuildingMat);

    // Material translúcido para edificios vecinos cuando "Modo contexto" está activo
    const ghostBuildingMat = new THREE.MeshStandardMaterial({
      color: 0xd8e2ec,
      transparent: true,
      opacity: 0.28,
      roughness: 0.6,
      metalness: 0.1,
      depthWrite: false,
    });

    // Clasificación determinista de edificios en 3 morfologías usando PRNG derivado
    // Los datos matemáticos originales (x, y, z, width, depth, height, color) no se alteran.
    type BuildingSlot = {
      building: BuildingData;
      isContextGhost: boolean;
    };

    const slotsType0: BuildingSlot[] = [];
    const slotsType1: BuildingSlot[] = [];
    const slotsType2: BuildingSlot[] = [];

    const lotRadiusContext = 65; // Radio en m para atenuar vecinos en Modo Contexto

    for (let i = 0; i < buildings.length; i++) {
      const b = buildings[i];

      // PRNG derivado por edificio para la morfología
      const shapeRng = mulberry32(params.seed + 10101 + i * 37)();

      let shapeType = 0;
      if (b.height > 34) {
        // Torres altas: 65% escalonadas, 35% simples
        shapeType = shapeRng < 0.65 ? 1 : 0;
      } else if (b.height < 15) {
        // Bloques bajos: 65% bloques con azotea, 35% simples
        shapeType = shapeRng < 0.65 ? 2 : 0;
      } else {
        // Altura media: distribución balanceada
        if (shapeRng < 0.34) shapeType = 0;
        else if (shapeRng < 0.68) shapeType = 1;
        else shapeType = 2;
      }

      // Comprobar si está en radio de Modo Contexto
      const distToLot = Math.hypot(b.x - params.lotX, b.z - params.lotZ);
      const isContextGhost = params.contextMode && distToLot < lotRadiusContext;

      const slot: BuildingSlot = { building: b, isContextGhost };

      if (shapeType === 0) slotsType0.push(slot);
      else if (shapeType === 1) slotsType1.push(slot);
      else slotsType2.push(slot);
    }

    // Función auxiliar para instanciar una geometría
    const instantiateCategory = (
      slots: BuildingSlot[],
      geometry: THREE.BufferGeometry
    ) => {
      // Separar normales de atenuados
      const normalSlots = slots.filter((s) => !s.isContextGhost);
      const ghostSlots = slots.filter((s) => s.isContextGhost);

      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3();
      const scale = new THREE.Vector3();
      const color = new THREE.Color();
      const quaternion = new THREE.Quaternion();

      if (normalSlots.length > 0) {
        const mesh = new THREE.InstancedMesh(geometry, standardBuildingMat, normalSlots.length);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        for (let i = 0; i < normalSlots.length; i++) {
          const b = normalSlots[i].building;
          position.set(b.x, b.y, b.z);
          scale.set(b.width, b.height, b.depth);
          matrix.compose(position, quaternion, scale);
          mesh.setMatrixAt(i, matrix);

          color.setRGB(b.color[0], b.color[1], b.color[2]);
          mesh.setColorAt(i, color);
        }

        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        instancedGroup.add(mesh);
      }

      if (ghostSlots.length > 0) {
        const meshGhost = new THREE.InstancedMesh(geometry, ghostBuildingMat, ghostSlots.length);
        meshGhost.castShadow = false; // Sin sombras para no opacar el lote
        meshGhost.receiveShadow = true;

        for (let i = 0; i < ghostSlots.length; i++) {
          const b = ghostSlots[i].building;
          position.set(b.x, b.y, b.z);
          scale.set(b.width, b.height, b.depth);
          matrix.compose(position, quaternion, scale);
          meshGhost.setMatrixAt(i, matrix);
        }

        meshGhost.instanceMatrix.needsUpdate = true;
        instancedGroup.add(meshGhost);
      }
    };

    instantiateCategory(slotsType0, simpleTower);
    instantiateCategory(slotsType1, steppedTower);
    instantiateCategory(slotsType2, lowBlock);
  }, [buildings, params.seed, params.contextMode, params.lotX, params.lotZ]);

  // 9. Actualización del "Lote del proyecto": volumen naranja translúcido, aristas, base y anillo luminoso
  useEffect(() => {
    const lotGroup = lotGroupRef.current;
    if (!lotGroup) return;

    // Limpiar hijos previos
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

    const { lotWidth, lotDepth, lotHeight, lotX, lotZ, showLotVolume, shadowStudy } = params;
    const baseY = metrics.lotBaseHeight;

    // Plataforma o losa nivelada en la base del lote
    const platformGeo = new THREE.BoxGeometry(lotWidth + 1.2, 0.35, lotDepth + 1.2);
    platformGeo.translate(0, -0.175, 0);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x35393d,
      roughness: 0.75,
      metalness: 0.15,
    });
    const platformMesh = new THREE.Mesh(platformGeo, platformMat);
    platformMesh.position.set(lotX, baseY, lotZ);
    platformMesh.receiveShadow = true;
    platformMesh.castShadow = true;
    lotGroup.add(platformMesh);

    // Borde perimetral luminoso en el suelo (anillo arquitectónico)
    const ringGeo = new THREE.RingGeometry(
      Math.min(lotWidth, lotDepth) * 0.45,
      Math.min(lotWidth, lotDepth) * 0.52,
      32
    );
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff7b22,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(lotX, baseY + 0.05, lotZ);
    lotGroup.add(ringMesh);

    // Marco exterior luminoso de la plataforma
    const frameGeo = new THREE.BoxGeometry(lotWidth + 1.4, 0.08, lotDepth + 1.4);
    frameGeo.translate(0, 0.04, 0);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      wireframe: true,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.position.set(lotX, baseY, lotZ);
    lotGroup.add(frameMesh);

    // Si la opción de mostrar volumen propuesto está activa
    if (showLotVolume) {
      // Caja naranja translúcida del proyecto con emisión para bloom
      const boxGeo = new THREE.BoxGeometry(lotWidth, lotHeight, lotDepth);
      boxGeo.translate(0, lotHeight / 2, 0);

      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xff6b1a,
        roughness: 0.28,
        metalness: 0.12,
        transparent: true,
        opacity: shadowStudy ? 0.82 : 0.62,
        emissive: new THREE.Color(0xff4800),
        emissiveIntensity: 0.35,
        depthWrite: false,
      });

      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.set(lotX, baseY, lotZ);
      boxMesh.castShadow = true;
      boxMesh.receiveShadow = true;
      lotGroup.add(boxMesh);

      // Aristas blancas destacadas en los bordes del volumen
      const edgesGeo = new THREE.EdgesGeometry(boxGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 2.5,
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
    params.shadowStudy,
    metrics.lotBaseHeight,
  ]);

  // 10. Gestión de presets de cámara con transición animada suave
  useEffect(() => {
    if (!cameraPreset || !cameraRef.current || !controlsRef.current) return;

    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const { lotX, lotZ, lotHeight } = params;
    const baseY = metrics.lotBaseHeight;

    const targetCam = new THREE.Vector3();
    const targetLook = new THREE.Vector3();

    if (cameraPreset === 'aerea') {
      targetCam.set(160, 150, 160);
      targetLook.set(0, 10, 0);
    } else if (cameraPreset === 'planta') {
      targetCam.set(0, 310, 0.1);
      targetLook.set(0, 0, 0);
    } else if (cameraPreset === 'calle') {
      targetCam.set(lotX - 32, baseY + 3.8, lotZ + 32);
      targetLook.set(lotX, baseY + Math.min(lotHeight * 0.45, 14), lotZ);
    }

    cameraTransition.current = {
      startPos: camera.position.clone(),
      targetPos: targetCam,
      startLookAt: controls.target.clone(),
      targetLookAt: targetLook,
      startTime: performance.now(),
      duration: 1000,
      active: true,
    };

    onCameraPresetApplied();
  }, [cameraPreset, params.lotX, params.lotZ, params.lotHeight, metrics.lotBaseHeight, onCameraPresetApplied]);

  const lotArea = params.lotWidth * params.lotDepth;

  return (
    <div
      ref={containerRef}
      className="scene-canvas-container"
      role="region"
      aria-label="Visualizador 3D interactivo de Terra Urbis"
    >
      {/* Etiqueta flotante 3D del Lote del Proyecto */}
      {lotLabelPos.visible && params.showLotVolume && (
        <div
          className="lot-floating-tag"
          style={{
            transform: `translate(${lotLabelPos.x}px, ${lotLabelPos.y}px) translate(-50%, -100%)`,
          }}
          aria-hidden="true"
        >
          <div className="lot-tag-badge">
            <span className="lot-tag-dot" />
            <span className="lot-tag-title">Lote del proyecto</span>
          </div>
          <div className="lot-tag-metrics">
            <span className="lot-tag-value">{lotArea} m²</span>
            <span className="lot-tag-sep">·</span>
            <span className="lot-tag-value">{params.lotHeight} m</span>
          </div>
        </div>
      )}
    </div>
  );
};
