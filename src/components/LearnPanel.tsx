/**
 * Terra Urbis - Módulo Didáctico "Aprende"
 * Enseña los fundamentos matemáticos de la generación procedural:
 * 1. Semillas y determinismo del PRNG (mulberry32)
 * 2. Suavizado cuíntico de Perlin vs interpolación lineal
 * 3. Capas fractales (fBm) con visualizador 2D interactivo en escala de grises
 */

import React, { useEffect, useRef, useState } from 'react';
import { WorldParams } from '../types';
import { PerlinNoise, sampleFBM } from '../lib/noise';
import { BookOpen, Sparkles, Sliders, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface LearnPanelProps {
  params: WorldParams;
  onUpdateParams: (partial: Partial<WorldParams>) => void;
}

export const LearnPanel: React.FC<LearnPanelProps> = ({ params, onUpdateParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'semillas' | 'suavizado' | 'octavas'>('octavas');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Renderiza el mapa de alturas 2D en escala de grises según las octavas y semilla actuales
  useEffect(() => {
    if (!isOpen || activeTab !== 'octavas') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const perlin = new PerlinNoise(params.seed);
    const scale = params.terrainScale;
    const octaves = params.octaves;

    // Muestreo 2D normalizado [0, 255]
    for (let py = 0; py < height; py++) {
      for (let px = 0; px < width; px++) {
        // Coordenadas mundiales centradas
        const wx = (px - width / 2) * (360 / width);
        const wz = (py - height / 2) * (360 / height);

        // Muestreo puro fBm
        const rawH = sampleFBM(
          wx,
          wz,
          octaves,
          scale,
          30,
          params.terrainType === 'plano' ? 'ondulado' : params.terrainType,
          perlin
        );

        // Normalizar en escala de grises [0, 255]
        const norm = Math.max(0, Math.min(255, Math.floor(((rawH + 30) / 60) * 255)));
        const pixelIdx = (py * width + px) * 4;

        data[pixelIdx] = norm;     // R
        data[pixelIdx + 1] = norm; // G
        data[pixelIdx + 2] = norm; // B
        data[pixelIdx + 3] = 255;  // Alpha
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, [isOpen, activeTab, params.seed, params.octaves, params.terrainScale, params.terrainType]);

  return (
    <div className={`learn-panel ${isOpen ? 'open' : 'collapsed'}`}>
      <button
        className="learn-header-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="learn-header-title">
          <BookOpen size={18} className="learn-icon" />
          <span>Aprende las Matemáticas Procedurales</span>
        </div>
        <div className="learn-header-toggle">
          <span className="badge-didactic">Didáctico</span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {isOpen && (
        <div className="learn-content">
          {/* Navegación por pestañas */}
          <div className="learn-tabs">
            <button
              className={`learn-tab-btn ${activeTab === 'semillas' ? 'active' : ''}`}
              onClick={() => setActiveTab('semillas')}
            >
              <Sparkles size={14} />
              <span>1. Semillas</span>
            </button>
            <button
              className={`learn-tab-btn ${activeTab === 'suavizado' ? 'active' : ''}`}
              onClick={() => setActiveTab('suavizado')}
            >
              <Sliders size={14} />
              <span>2. Suavizado</span>
            </button>
            <button
              className={`learn-tab-btn ${activeTab === 'octavas' ? 'active' : ''}`}
              onClick={() => setActiveTab('octavas')}
            >
              <Layers size={14} />
              <span>3. Capas Fractales</span>
            </button>
          </div>

          {/* Lección 1: Semillas */}
          {activeTab === 'semillas' && (
            <div className="lesson-body">
              <h4 className="lesson-title">Semillas PRNG y Determinismo</h4>
              <p className="lesson-desc">
                Las computadoras no generan números verdaderamente aleatorios. Utilizan un algoritmo
                <strong> pseudoaleatorio (PRNG)</strong> como <code>mulberry32</code>. Una <em>semilla</em> (número entero)
                define el estado inicial: <strong>la misma semilla produce la misma secuencia matemática</strong>,
                lo que garantiza que un diseño topográfico y arquitectónico se pueda replicar exactamente.
              </p>
              <div className="lesson-interactive">
                <span className="interactive-label">Probar semillas predeterminadas:</span>
                <div className="seed-pills">
                  {[42, 1337, 777, 98234, 10001].map((s) => (
                    <button
                      key={s}
                      className={`seed-pill-btn ${params.seed === s ? 'active' : ''}`}
                      onClick={() => onUpdateParams({ seed: s })}
                    >
                      Semilla #{s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Lección 2: Suavizado */}
          {activeTab === 'suavizado' && (
            <div className="lesson-body">
              <h4 className="lesson-title">Interpolación y Función Fade de Perlin</h4>
              <p className="lesson-desc">
                El ruido blanco genera estática caótica sin continuidad. El <strong>Ruido de Perlin</strong> asigna
                vectores de gradiente en los nodos de una cuadrícula e interpola suavemente entre ellos usando la
                función polinómica cuíntica:
              </p>
              <div className="math-formula">
                <code>f(t) = 6t⁵ - 15t⁴ + 10t³</code>
              </div>
              <p className="lesson-desc">
                Esta función posee derivadas primera y segunda iguales a cero en <code>t=0</code> y <code>t=1</code>
                (continuidad C²). Esto elimina bordes afilados o costuras artificiales entre las celdas del terreno.
              </p>
              <div className="fade-visualizer">
                <svg viewBox="0 0 200 80" className="fade-curve-svg">
                  {/* Ejes */}
                  <line x1="20" y1="70" x2="180" y2="70" stroke="var(--border)" strokeWidth="1" />
                  <line x1="20" y1="10" x2="20" y2="70" stroke="var(--border)" strokeWidth="1" />
                  {/* Curva lineal t (gris discontinua) */}
                  <line x1="20" y1="70" x2="180" y2="10" stroke="var(--text-muted)" strokeDasharray="3,3" strokeWidth="1" />
                  {/* Curva cuíntica fade(t) en color acento */}
                  <path
                    d="M 20 70 C 80 70, 120 10, 180 10"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                  />
                  <text x="25" y="65" fontSize="8" fill="var(--text-muted)">t=0</text>
                  <text x="165" y="22" fontSize="8" fill="var(--text-muted)">t=1</text>
                </svg>
                <div className="curve-legend">
                  <span className="legend-item"><span className="dot dot-accent"></span> Perlin Fade C² (Suave)</span>
                  <span className="legend-item"><span className="dot dot-dashed"></span> Lineal (Aristas duras)</span>
                </div>
              </div>
            </div>
          )}

          {/* Lección 3: Capas fractales (Octavas) */}
          {activeTab === 'octavas' && (
            <div className="lesson-body">
              <h4 className="lesson-title">Capas Fractales (fBm y Octavas)</h4>
              <p className="lesson-desc">
                El <strong>Movimiento Browniano Fraccional (fBm)</strong> suma múltiples capas de ruido de Perlin.
                Cada capa (octava) duplica la frecuencia espacial (lacunaridad = 2.0) y reduce a la mitad su peso
                vertical (ganancia = 0.5):
              </p>
              <div className="math-formula">
                <code>Altura(x,z) = ∑ (amplitud × gananciaⁱ) × Perlin(frecuencia × 2ⁱ)</code>
              </div>
              <p className="lesson-desc">
                La 1ª octava forma las montañas y valles principales; las octavas superiores agregan la rugosidad
                y el detalle de las laderas.
              </p>
              <div className="octaves-interactive-demo">
                <div className="demo-slider-row">
                  <label htmlFor="didactic-octaves-slider">
                    Número de octavas actuales: <strong>{params.octaves}</strong>
                  </label>
                  <input
                    id="didactic-octaves-slider"
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={params.octaves}
                    onChange={(e) => onUpdateParams({ octaves: parseInt(e.target.value, 10) })}
                  />
                </div>

                <div className="heightmap-preview-container">
                  <div className="heightmap-canvas-box">
                    <canvas
                      ref={canvasRef}
                      width={128}
                      height={128}
                      className="heightmap-canvas"
                      title="Mapa de alturas 2D en escala de grises"
                    />
                    <span className="heightmap-caption">Vista 2D (Mapa de alturas)</span>
                  </div>
                  <div className="heightmap-details">
                    <p className="detail-line">
                      • <strong>Octava 1</strong>: Macizo continental base.
                    </p>
                    <p className="detail-line">
                      • <strong>Octavas 2 a 4</strong>: Colinas y vaguadas intermedias.
                    </p>
                    <p className="detail-line">
                      • <strong>Octavas 5 a 6</strong>: Micro-relieve y textura rocosa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
