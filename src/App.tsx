/**
 * Terra Urbis - Aplicación Principal
 * Coordina el estado reactivo, la regeneración procedural desacoplada del estudio solar,
 * el tema claro/oscuro y el enlace entre la escena 3D y el panel de control.
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { WorldParams, WorldStats, CameraPreset, TerrainMetrics, BuildingData } from './types';
import { PerlinNoise } from './lib/noise';
import { generateTerrainMesh } from './lib/terrain';
import { generateCityBuildings } from './lib/city';
import { Scene } from './components/Scene';
import { ControlPanel } from './components/ControlPanel';
import './styles.css';

// Parámetros por defecto según especificación
const DEFAULT_PARAMS: WorldParams = {
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

export const App: React.FC = () => {
  // Cargar semilla opcional de localStorage si existe
  const initialParams: WorldParams = useMemo(() => {
    try {
      const savedSeed = localStorage.getItem('terra_urbis_last_seed');
      if (savedSeed) {
        const parsed = parseInt(savedSeed, 10);
        if (!isNaN(parsed)) {
          return { ...DEFAULT_PARAMS, seed: parsed };
        }
      }
    } catch {
      // Ignorar restricciones de localStorage en entornos restringidos
    }
    return DEFAULT_PARAMS;
  }, []);

  const [params, setParams] = useState<WorldParams>(initialParams);

  // Tema claro/oscuro
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Presets de cámara
  const [cameraPreset, setCameraPreset] = useState<CameraPreset | null>(null);

  // Geometría del terreno y edificios generados
  const [terrainGeo, setTerrainGeo] = useState<THREE.BufferGeometry | null>(null);
  const [waterGeo, setWaterGeo] = useState<THREE.BufferGeometry | null>(null);
  const [metrics, setMetrics] = useState<TerrainMetrics>({
    minHeight: 0,
    maxHeight: 14,
    waterLevel: 3.5,
    centerHeight: 0,
    lotBaseHeight: 0,
  });
  const [buildings, setBuildings] = useState<BuildingData[]>([]);

  // Referencia para debounce de generación pesada
  const debounceTimerRef = useRef<number | null>(null);

  // Función principal de generación procedural
  const executeGeneration = useCallback((currentParams: WorldParams) => {
    const perlin = new PerlinNoise(currentParams.seed);

    // 1. Generar malla de terreno y plano de agua
    const { geometry, metrics: newMetrics, waterGeometry } = generateTerrainMesh(currentParams, perlin);

    // 2. Generar edificios con InstancedMesh
    const newBuildings = generateCityBuildings(currentParams, perlin, newMetrics);

    setTerrainGeo(geometry);
    setWaterGeo(waterGeometry);
    setMetrics(newMetrics);
    setBuildings(newBuildings);

    // Guardar opcionalmente la última semilla
    try {
      localStorage.setItem('terra_urbis_last_seed', currentParams.seed.toString());
    } catch {
      // ignorar
    }
  }, []);

  // Parámetros que requieren regenerar geometría (excluye hourOfDay y showLotVolume)
  const geomDependencies = [
    params.seed,
    params.terrainType,
    params.relief,
    params.terrainScale,
    params.octaves,
    params.cityRadius,
    params.cityDensity,
    params.maxBuildingHeight,
    params.urbanLeveling,
    params.lotWidth,
    params.lotDepth,
    params.lotHeight,
    params.lotX,
    params.lotZ,
    params.showWater,
  ];

  useEffect(() => {
    if (debounceTimerRef.current !== null) {
      window.clearTimeout(debounceTimerRef.current);
    }

    // Debounce rápido de 60 ms para permitir movimientos fluidos de sliders
    debounceTimerRef.current = window.setTimeout(() => {
      executeGeneration(params);
    }, 60);

    return () => {
      if (debounceTimerRef.current !== null) {
        window.clearTimeout(debounceTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, geomDependencies);

  // Generación inicial inmediata
  useEffect(() => {
    executeGeneration(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Actualización parcial de parámetros
  const handleUpdateParams = useCallback((partial: Partial<WorldParams>) => {
    setParams((prev) => ({ ...prev, ...partial }));
  }, []);

  // Generador de semilla aleatoria
  const handleRandomSeed = useCallback(() => {
    const newSeed = Math.floor(Math.random() * 900000) + 10000;
    handleUpdateParams({ seed: newSeed });
  }, [handleUpdateParams]);

  // Alternar tema
  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Aplicar tema en el elemento root del documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Estadísticas calculadas
  const stats: WorldStats = useMemo(() => {
    let maxBuildingH = 0;
    for (let i = 0; i < buildings.length; i++) {
      const totalH = buildings[i].y + buildings[i].height;
      if (totalH > maxBuildingH) maxBuildingH = totalH;
    }

    const maxEnvH = Math.max(metrics.maxHeight, maxBuildingH, metrics.lotBaseHeight + params.lotHeight);
    const heightDelta = params.terrainType === 'plano' ? 0 : Math.max(0, metrics.maxHeight - metrics.minHeight);
    const lotArea = params.lotWidth * params.lotDepth;

    return {
      buildingCount: buildings.length,
      maxSurroundingHeight: maxEnvH,
      heightDelta,
      lotArea,
    };
  }, [buildings, metrics, params.lotHeight, params.lotWidth, params.lotDepth, params.terrainType]);

  return (
    <div className="app-layout" data-theme={theme}>
      {/* Visualizador 3D principal */}
      <main className="main-viewport" role="main">
        <Scene
          params={params}
          terrainGeometry={terrainGeo}
          waterGeometry={waterGeo}
          metrics={metrics}
          buildings={buildings}
          cameraPreset={cameraPreset}
          onCameraPresetApplied={() => setCameraPreset(null)}
        />
      </main>

      {/* Panel lateral de controles y didáctica */}
      <ControlPanel
        params={params}
        stats={stats}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onUpdateParams={handleUpdateParams}
        onSelectCameraPreset={setCameraPreset}
        onRandomSeed={handleRandomSeed}
      />
    </div>
  );
};

export default App;
