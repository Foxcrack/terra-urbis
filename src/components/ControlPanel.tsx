/**
 * Terra Urbis - Panel lateral de controles y configuración
 * Agrupa los parámetros del mundo, ciudad, lote del proyecto, estudio solar 24h,
 * selector de calidad gráfica, exportación de capturas PNG,
 * botones de cámara, estadísticas e integración con el módulo didáctico.
 */

import React from 'react';
import { WorldParams, TerrainType, CameraPreset, WorldStats, RenderQuality } from '../types';
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
  Sparkles,
  Info,
  Sunrise,
  Sunset,
  Presentation as PresentationIcon,
} from 'lucide-react';

interface ControlPanelProps {
  params: WorldParams;
  stats: WorldStats;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onUpdateParams: (partial: Partial<WorldParams>) => void;
  onSelectCameraPreset: (preset: CameraPreset) => void;
  onRandomSeed: () => void;
  onCaptureScreenshot: () => void;
  onOpenPresentation: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  stats,
  theme,
  onToggleTheme,
  onUpdateParams,
  onSelectCameraPreset,
  onRandomSeed,
  onCaptureScreenshot,
  onOpenPresentation,
}) => {
  // Formatear texto dinámico de hora
  const hourInt = Math.floor(params.hourOfDay);
  const minInt = Math.floor((params.hourOfDay % 1) * 60);
  const timeFormatted = `${hourInt.toString().padStart(2, '0')}:${minInt.toString().padStart(2, '0')} h`;

  let timePhase = 'Día';
  if (params.hourOfDay < 5.5 || params.hourOfDay > 19.5) {
    timePhase = 'Noche (Ventanas ON)';
  } else if (params.hourOfDay < 8.0) {
    timePhase = 'Amanecer';
  } else if (params.hourOfDay > 16.5) {
    timePhase = 'Atardecer';
  } else {
    timePhase = 'Mediodía';
  }

  return (
    <aside className="control-sidebar" aria-label="Panel de configuración de Terra Urbis">
      {/* Encabezado de la aplicación */}
      <header className="sidebar-header">
        <div className="sidebar-brand">
          <div className="brand-badge">🏙️</div>
          <div>
            <h1 className="brand-title">Terra Urbis</h1>
            <p className="brand-subtitle">Visualización y Ciudad Procedural</p>
          </div>
        </div>
        <div className="header-actions">
          <button
            className="header-presentation-btn"
            onClick={onOpenPresentation}
            title="Abrir Presentación del Proyecto (Pantalla completa)"
            aria-label="Abrir Presentación del Proyecto"
          >
            <PresentationIcon size={16} />
            <span>Presentación</span>
          </button>
          <button
            className="header-icon-btn screenshot-btn"
            onClick={onCaptureScreenshot}
            title="Capturar imagen PNG de la vista actual"
            aria-label="Capturar imagen PNG"
          >
            <Camera size={16} />
          </button>
          <button
            className="header-icon-btn theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Alternar tema de interfaz"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <div className="sidebar-scrollable-content">
        {/* Panel de Estadísticas */}
        <section className="control-section stats-section">
          <Stats stats={stats} />
        </section>

        {/* Selector de Calidad Gráfica */}
        <section className="control-section">
          <div className="section-title">
            <Sparkles size={16} />
            <span>Calidad Gráfica</span>
            <span
              className="tooltip-badge"
              title="Ajusta la resolución de sombras y el postprocesado: Baja (sin postprocesado para móviles 60fps), Media (Bloom + Árboles + FXAA) y Alta (Oclusión Ambiental GTAO + Sombras 2048px)."
            >
              <Info size={13} />
            </span>
          </div>
          <div className="segmented-control quality-control">
            {(['baja', 'media', 'alta'] as RenderQuality[]).map((q) => (
              <button
                key={q}
                className={`segment-btn ${params.quality === q ? 'active' : ''}`}
                onClick={() => onUpdateParams({ quality: q })}
                title={
                  q === 'baja'
                    ? 'Baja: Direct WebGL para móviles y bajo consumo (60 FPS)'
                    : q === 'media'
                    ? 'Media: Bloom nocturno sutil, árboles y antialiasing FXAA'
                    : 'Alta: Oclusión Ambiental GTAO, sombras HD 2048 y máxima vegetación'
                }
              >
                {q === 'baja' && 'Baja'}
                {q === 'media' && 'Media'}
                {q === 'alta' && 'Alta'}
              </button>
            ))}
          </div>
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
            <span
              className="tooltip-badge"
              title="Transición cinemática amortiguada hacia posiciones canónicas arquitectónicas: Aérea (isométrica), Planta (cenital ortogonal) o Calle (nivel de observador peatonal)."
            >
              <Info size={13} />
            </span>
          </div>
          <div className="camera-btn-group">
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('aerea')}
              title="Vista isométrica general (perspectiva clásica 45°)"
            >
              <Compass size={14} />
              <span>Aérea</span>
            </button>
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('planta')}
              title="Vista cenital de implantación urbana"
            >
              <Layers size={14} />
              <span>Planta</span>
            </button>
            <button
              className="camera-btn"
              onClick={() => onSelectCameraPreset('calle')}
              title="Vista peatonal en rasante hacia el lote del proyecto"
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
            <span
              className="tooltip-badge"
              title="Generación topográfica determinista mediante PRNG Mulberry32, gradiente Perlin y armónicos fractales fBm."
            >
              <Info size={13} />
            </span>
          </div>

          {/* Semilla */}
          <div className="control-row seed-row">
            <label htmlFor="seed-input" className="control-label">
              <span>Semilla (PRNG):</span>
              <span
                className="tooltip-icon"
                title="Semilla de 32 bits para el generador Mulberry32. La misma semilla garantiza reproducir exactamente el mismo terreno y edificios bit a bit."
              >
                <Info size={12} />
              </span>
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
            <label className="control-label">
              <span>Tipo de terreno:</span>
              <span
                className="tooltip-icon"
                title="Plano: cota cero constante. Ondulado: fBm estándar con colinas suaves. Montañoso: Ridged multifractal con crestas afiladas (n = 2n² - 1)."
              >
                <Info size={12} />
              </span>
            </label>
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
                  <label htmlFor="relief-slider">
                    <span>Relieve vertical:</span>
                    <span
                      className="tooltip-icon"
                      title="Amplitud vertical máxima en metros (0 a 60 m). Escala el relieve resultante de la suma fractal."
                    >
                      <Info size={12} />
                    </span>
                  </label>
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
                  <label htmlFor="scale-slider">
                    <span>Escala del terreno:</span>
                    <span
                      className="tooltip-icon"
                      title="Frecuencia espacial del ruido de Perlin (0.006 × escala). Valores bajos generan colinas extendidas; valores altos, topografía densa."
                    >
                      <Info size={12} />
                    </span>
                  </label>
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
                  <label htmlFor="octaves-slider">
                    <span>Capas fractales (Octavas):</span>
                    <span
                      className="tooltip-icon"
                      title="Número de armónicos fractales superpuestos (1 a 6). Cada octava duplica la frecuencia espacial y reduce la amplitud a la mitad."
                    >
                      <Info size={12} />
                    </span>
                  </label>
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
            <span
              className="tooltip-badge"
              title="Cuadrícula ortogonal cada 12 m con calles de 4.4 m, calzadas de asfalto y aceras. Variedad visual con 3 tipos de edificios instanciados."
            >
              <Info size={13} />
            </span>
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="city-radius-slider">
                <span>Radio de la ciudad:</span>
                <span
                  className="tooltip-icon"
                  title="Radio máximo R en metros dentro del cual se generan manzanas urbanas y edificios."
                >
                  <Info size={12} />
                </span>
              </label>
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
              <label htmlFor="city-density-slider">
                <span>Densidad urbana:</span>
                <span
                  className="tooltip-icon"
                  title="Probabilidad radial de ocupación: P(d) = densidad × (1 - 0.55 × d/R). Mayor densidad en el núcleo urbano central."
                >
                  <Info size={12} />
                </span>
              </label>
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
              <label htmlFor="building-height-slider">
                <span>Altura máx. edificios:</span>
                <span
                  className="tooltip-icon"
                  title="Perfil radial de alturas: Altura = alturaMax × (0.15 + 0.85(1 - d/R)^1.5) × factorAleatorio. Produce un skyline cónico natural."
                >
                  <Info size={12} />
                </span>
              </label>
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
              <label htmlFor="urban-leveling-slider">
                <span>Nivelación urbana:</span>
                <span
                  className="tooltip-icon"
                  title="Grado de explanación topográfica en la ciudad: interpola la cota del terreno hacia la cota central según una máscara smoothstep."
                >
                  <Info size={12} />
                </span>
              </label>
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
            <span
              className="tooltip-badge"
              title="Volumen prisma naranja para análisis de inserción, ocupación de suelo y asoleamiento."
            >
              <Info size={13} />
            </span>
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

          {/* Opciones de visualización arquitectónica del lote */}
          <div className="checkbox-row">
            <label className="checkbox-label" onClick={() => onUpdateParams({ showLotVolume: !params.showLotVolume })}>
              {params.showLotVolume ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
              <span>Mostrar volumen propuesto</span>
            </label>
          </div>

          <div className="checkbox-row">
            <label className="checkbox-label" onClick={() => onUpdateParams({ contextMode: !params.contextMode })}>
              {params.contextMode ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
              <span>Modo contexto (atenuar edificios vecinos)</span>
            </label>
            <span
              className="tooltip-icon"
              title="Atenúa a semitransparente los edificios en un radio de 65 m para que el lote destaque claramente aunque esté rodeado de torres."
            >
              <Info size={12} />
            </span>
          </div>

          <div className="checkbox-row">
            <label className="checkbox-label" onClick={() => onUpdateParams({ shadowStudy: !params.shadowStudy })}>
              {params.shadowStudy ? <CheckSquare size={16} className="checked-icon" /> : <Square size={16} />}
              <span>Estudio de sombras del lote</span>
            </label>
            <span
              className="tooltip-icon"
              title="Enfatiza el contraste de sombras solares directas para evaluar cómo incide el volumen propuesto sobre las parcelas adyacentes a cada hora."
            >
              <Info size={12} />
            </span>
          </div>
        </section>

        {/* Sección: Ambiente & Estudio Solar 24 Horas */}
        <section className="control-section">
          <div className="section-title">
            <Sun size={16} />
            <span>Ambiente y Estudio Solar (24 h)</span>
            <span
              className="tooltip-badge"
              title="Ciclo solar y lunar continuo de 0 a 24 horas. De noche (fuera de 6-18h) se encienden las ventanas de los edificios y la iluminación pasa a luz de luna."
            >
              <Info size={13} />
            </span>
          </div>

          <div className="control-row slider-row">
            <div className="slider-header">
              <label htmlFor="sun-hour-slider">Hora del día:</label>
              <span className="slider-value sun-hour-badge">
                {timeFormatted} · {timePhase}
              </span>
            </div>
            <input
              id="sun-hour-slider"
              type="range"
              min="0"
              max="24"
              step="0.1"
              value={params.hourOfDay}
              onChange={(e) => onUpdateParams({ hourOfDay: parseFloat(e.target.value) })}
            />

            {/* Accesos rápidos de hora */}
            <div className="hour-quick-buttons">
              <button
                className={`quick-time-btn ${Math.abs(params.hourOfDay - 7) < 0.5 ? 'active' : ''}`}
                onClick={() => onUpdateParams({ hourOfDay: 7 })}
                title="Amanecer (07:00 h)"
              >
                <Sunrise size={12} />
                <span>07:00</span>
              </button>
              <button
                className={`quick-time-btn ${Math.abs(params.hourOfDay - 12) < 0.5 ? 'active' : ''}`}
                onClick={() => onUpdateParams({ hourOfDay: 12 })}
                title="Mediodía Cenit (12:00 h)"
              >
                <Sun size={12} />
                <span>12:00</span>
              </button>
              <button
                className={`quick-time-btn ${Math.abs(params.hourOfDay - 18) < 0.5 ? 'active' : ''}`}
                onClick={() => onUpdateParams({ hourOfDay: 18 })}
                title="Atardecer (18:00 h)"
              >
                <Sunset size={12} />
                <span>18:00</span>
              </button>
              <button
                className={`quick-time-btn ${params.hourOfDay >= 21 || params.hourOfDay <= 4 ? 'active' : ''}`}
                onClick={() => onUpdateParams({ hourOfDay: 22 })}
                title="Modo Noche con Ventanas Encendidas (22:00 h)"
              >
                <Moon size={12} />
                <span>22:00 (Noche)</span>
              </button>
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
          Terra Urbis v1.1 • Visualización Arquitectónica y Urbana
        </p>
      </footer>
    </aside>
  );
};
