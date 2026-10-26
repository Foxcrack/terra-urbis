/**
 * Terra Urbis - Panel lateral de controles y configuración
 * Agrupa los parámetros del mundo, ciudad, lote del proyecto, estudio solar,
 * botones de cámara, estadísticas e integración con el módulo didáctico.
 */

import React from 'react';
import { WorldParams, TerrainType, CameraPreset, WorldStats } from '../types';
import { Stats } from './Stats';
import { LearnPanel } from './LearnPanel';
import {
  Shuffle,
  Sun,
  Camera,
  Layers,
  Building,
  Box,
  Compass,
  CheckSquare,
  Square,
  SunMedium,
  Moon,
} from 'lucide-react';

interface ControlPanelProps {
  params: WorldParams;
  stats: WorldStats;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onUpdateParams: (partial: Partial<WorldParams>) => void;
  onSelectCameraPreset: (preset: CameraPreset) => void;
  onRandomSeed: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  stats,
  theme,
  onToggleTheme,
  onUpdateParams,
  onSelectCameraPreset,
  onRandomSeed,
}) => {
  return (
    <aside className="control-sidebar" aria-label="Panel de configuración de Terra Urbis">
      {/* Encabezado de la aplicación */}
      <header className="sidebar-header">
        <div className="sidebar-brand">
          <div className="brand-badge">🏙️</div>
          <div>
            <h1 className="brand-title">Terra Urbis</h1>
            <p className="brand-subtitle">Generador de terrenos y ciudades</p>
          </div>
        </div>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-label="Alternar tema de interfaz"
        >
          {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <div className="sidebar-scrollable-content">
        {/* Panel de Estadísticas */}
        <section className="control-section stats-section">
          <Stats stats={stats} />
        </section>

        {/* Módulo Didáctico "Aprende" */}
        <section className="control-section">
          <LearnPanel params={params} onUpdateParams={onUpdateParams} />
        </section>

        {/* Sección: Vistas de Cámara */}
        <section className="control-section">
          <div className="section-title">
            <Camera size={16} />
            <span>Vistas de Cámara</span>
          </div>
          <div className="camera-btn-group">
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('aerea')}
              title="Vista isométrica general"
            >
              <Compass size={14} />
              <span>Aérea</span>
            </button>
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('planta')}
              title="Vista cenital ortogonal"
            >
              <Layers size={14} />
              <span>Planta</span>
            </button>
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('calle')}
              title="Vista a nivel peatonal del lote"
            >
              <Building size={14} />
              <span>Calle</span>
            </button>
          </div>
        </section>

        {/* Sección: Semilla y Tipo de Terreno */}
        <section className="control-section">
          <div className="section-title">
            <Layers size={16} />
            <span>Matemáticas y Relieve</span>
          </div>

          {/* Semilla */}
          <div className="control-row seed-row">
            <label htmlFor="seed-input" className="control-label">
              Semilla (PRNG):
            </label>
            <div className="seed-input-container">
              <input
                id="seed-input"
                type="number"
                className="input-number"
                value={params.seed}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val)) onUpdateParams({ seed: val });
                }}
              />
              <button
                className="btn-secondary random-seed-btn"
                onClick={onRandomSeed}
                title="Generar nueva semilla aleatoria"
              >
                <Shuffle size={14} />
                <span>Aleatoria</span>
              </button>
            </div>
          </div>

          {/* Tipo de terreno */}
          <div className="control-row">
            <label className="control-label">Tipo de terreno:</label>
            <div className="segmented-control">
              {(['plano', 'ondulado', 'montanoso'] as TerrainType[]).map((t) => (
                <button
                  key={t}
                  className={`segment-btn ${params.terrainType === t ? 'active' : ''}`}
                  onClick={() => onUpdateParams({ terrainType: t })}
                >
                  {t === 'plano' && 'Plano'}
                  {t === 'ondulado' && 'Ondulado'}
                  {t === 'montanoso' && 'Montañoso'}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders de Terreno */}
          {params.terrainType !== 'plano' && (
            <>
              <div className="control-row slider-row">
                <div className="slider-header">
                  <label htmlFor="relief-slider">Relieve vertical:</label>
                  <span className="slider-value">{params.relief} m</span>
                </div>
                <input
                  id="relief-slider"
                  type="range"
                  min="0"
                  max="60"
                  step="1"
                  value={params.relief}
                  onChange={(e) => onUpdateParams({ relief: parseFloat(e.target.value) })}
                />
              </div>

              <div className="control-row slider-row">
                <div className="slider-header">
                  <label htmlFor="scale-slider">Escala del terreno:</label>
                  <span className="slider-value">{params.terrainScale.toFixed(2)}x</span>
                </div>
                <input
                  id="scale-slider"
                  type="range"
                  min="0.4"
                  max="4"
                  step="0.1"
                  value={params.terrainScale}
                  onChange={(e) => onUpdateParams({ terrainScale: parseFloat(e.target.value) })}
                />
              </div>

              <div className="control-row slider-row">
                <div className="slider-header">
                  <label htmlFor="octaves-slider">Capas fractales (Octavas):</label>
                  <span className="slider-value">{params.octaves}</span>
                </div>
                <input
                  id="octaves-slider"
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={params.octaves}
                  onChange={(e) => onUpdateParams({ octaves: parseInt(e.target.value, 10) })}
                />
              </div>
            </>
          )}
        </section>

        {/* Sección: Ciudad y Trama Urbana */}
        <section className="control-section">
          <div className="section-title">
            <Building size={16} />
            <span>Trama Urbana y Edificios</span>
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="city-radius-slider">Radio de la ciudad:</label>
              <span className="slider-value">{params.cityRadius} m</span>
            </div>
            <input
              id="city-radius-slider"
              type="range"
              min="30"
              max="180"
              step="5"
              value={params.cityRadius}
              onChange={(e) => onUpdateParams({ cityRadius: parseFloat(e.target.value) })}
            />
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="city-density-slider">Densidad urbana:</label>
              <span className="slider-value">{params.cityDensity}%</span>
            </div>
            <input
              id="city-density-slider"
              type="range"
              min="20"
              max="100"
              step="5"
              value={params.cityDensity}
              onChange={(e) => onUpdateParams({ cityDensity: parseFloat(e.target.value) })}
            />
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="building-height-slider">Altura máx. edificios:</label>
              <span className="slider-value">{params.maxBuildingHeight} m</span>
            </div>
            <input
              id="building-height-slider"
              type="range"
              min="10"
              max="120"
              step="5"
              value={params.maxBuildingHeight}
              onChange={(e) => onUpdateParams({ maxBuildingHeight: parseFloat(e.target.value) })}
            />
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="urban-leveling-slider">Nivelación urbana:</label>
              <span className="slider-value">{params.urbanLeveling}%</span>
            </div>
            <input
              id="urban-leveling-slider"
              type="range"
              min="0"
              max="100"
              step="5"
              value={params.urbanLeveling}
              onChange={(e) => onUpdateParams({ urbanLeveling: parseFloat(e.target.value) })}
            />
          </div>
        </section>

        {/* Sección: Lote del Proyecto */}
        <section className="control-section">
          <div className="section-title">
            <Box size={16} />
            <span>Lote de Proyecto (Implantación)</span>
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="lot-width-slider">Ancho del lote:</label>
              <span className="slider-value">{params.lotWidth} m</span>
            </div>
            <input
              id="lot-width-slider"
              type="range"
              min="10"
              max="60"
              step="2"
              value={params.lotWidth}
              onChange={(e) => onUpdateParams({ lotWidth: parseFloat(e.target.value) })}
            />
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="lot-depth-slider">Fondo del lote:</label>
              <span className="slider-value">{params.lotDepth} m</span>
            </div>
            <input
              id="lot-depth-slider"
              type="range"
              min="10"
              max="60"
              step="2"
              value={params.lotDepth}
              onChange={(e) => onUpdateParams({ lotDepth: parseFloat(e.target.value) })}
            />
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="lot-height-slider">Altura propuesta:</label>
              <span className="slider-value">{params.lotHeight} m</span>
            </div>
            <input
              id="lot-height-slider"
              type="range"
              min="5"
              max="80"
              step="1"
              value={params.lotHeight}
              onChange={(e) => onUpdateParams({ lotHeight: parseFloat(e.target.value) })}
            />
          </div>

          <div className="checkbox-row">
            <label className="checkbox-label" onClick={() => onUpdateParams({ showLotVolume: !params.showLotVolume })}>
              {params.showLotVolume ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
              <span>Mostrar volumen propuesto</span>
            </label>
          </div>
        </section>

        {/* Sección: Ambiente & Estudio Solar */}
        <section className="control-section">
          <div className="section-title">
            <Sun size={16} />
            <span>Ambiente y Estudio Solar</span>
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="sun-hour-slider">Hora del día:</label>
              <span className="slider-value sun-hour-badge">
                {Math.floor(params.hourOfDay).toString().padStart(2, '0')}:
                {Math.floor((params.hourOfDay % 1) * 60)
                  .toString()
                  .padStart(2, '0')}{' '}
                h
              </span>
            </div>
            <input
              id="sun-hour-slider"
              type="range"
              min="6"
              max="18"
              step="0.1"
              value={params.hourOfDay}
              onChange={(e) => onUpdateParams({ hourOfDay: parseFloat(e.target.value) })}
            />
            <div className="sun-range-legend">
              <span>06:00 (Amanecer)</span>
              <span>12:00 (Cenit)</span>
              <span>18:00 (Atardecer)</span>
            </div>
          </div>

          {params.terrainType !== 'plano' && (
            <div className="checkbox-row">
              <label className="checkbox-label" onClick={() => onUpdateParams({ showWater: !params.showWater })}>
                {params.showWater ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
                <span>Mostrar plano de agua</span>
              </label>
            </div>
          )}
        </section>
      </div>

      <footer className="sidebar-footer">
        <p className="footer-credits">
          Terra Urbis v1.0 • Generación Procedural para Arquitectura
        </p>
      </footer>
    </aside>
  );
};
