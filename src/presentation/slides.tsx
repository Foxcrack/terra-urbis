/**
 * Terra Urbis - Definición de Diapositivas Tipadas
 * Contiene el contenido real del avance para la presentación final de Pensamiento Matemático.
 */

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import {
  BookOpen,
  Compass,
  Cpu,
  Palette,
  MessageSquare,
  Building2,
  Factory,
  Shuffle,
  ExternalLink,
  Target,
  HelpCircle,
} from 'lucide-react';
import { MiniScene } from './MiniScene';
import { PerlinNoise, sampleFBM } from '../lib/noise';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  notes: string;
  render: () => React.ReactNode;
}

/* ==========================================================================
   COMPONENTES INTERACTIVOS PARA LAS DIAPOSITIVAS
   ========================================================================== */

/**
 * Slide 7: Interactivo de Semillas y PRNG
 */
const InteractiveSeedSlide: React.FC = () => {
  const [seed, setSeed] = useState(42089);

  return (
    <div className="slide-split-layout">
      <div className="slide-text-pane">
        <p className="slide-lead">
          En computación, el azar puro no existe: los números pseudoaleatorios provienen de un algoritmo <strong>determinista</strong>.
        </p>

        <div className="math-callout-box">
          <div className="math-badge">Algoritmo Mulberry32 (32-bit)</div>
          <pre className="code-snippet">
{`s = (s + 0x6d2b79f5) >>> 0;
t = Math.imul(s ^ (s >>> 15), 1 | s);
t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
return ((t ^ (t >>> 14)) >>> 0) / 4294967296;`}
          </pre>
          <p className="math-caption">
            Transformaciones lineales y no lineales bit a bit con periodo de \(2^{32}\) valores uniformes.
          </p>
        </div>

        <div className="interactive-controls-card">
          <label htmlFor="slide-seed-input" className="interactive-label">
            Ingresa o cambia la semilla:
          </label>
          <div className="interactive-seed-bar">
            <input
              id="slide-seed-input"
              type="number"
              className="slide-input-number"
              value={seed}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val)) setSeed(val);
              }}
            />
            <button
              className="slide-action-btn"
              onClick={() => setSeed(Math.floor(Math.random() * 900000) + 10000)}
            >
              <Shuffle size={14} />
              <span>Aleatoria</span>
            </button>
            <button
              className="slide-action-btn secondary"
              onClick={() => setSeed(42089)}
              title="Volver a la semilla original de demostración"
            >
              <span>42089</span>
            </button>
          </div>
          <p className="interactive-hint">
            💡 <strong>Prueba esto:</strong> Cambia el número para ver un mundo nuevo; vuelve a escribir el número anterior y verás exactamente el mismo mundo reconstruido.
          </p>
        </div>
      </div>

      <div className="slide-viewport-pane">
        <MiniScene seed={seed} autoRotate={false} cameraPreset="diagonal" />
        <span className="mini-viewport-caption">Mundo 3D generado por semilla: #{seed}</span>
      </div>
    </div>
  );
};

/**
 * Slide 8: Interactivo de Ruido 1D y Curva Cuíntica
 */
const InteractiveNoiseSlide: React.FC = () => {
  const [showLinear, setShowLinear] = useState(true);
  const [showPerlin, setShowPerlin] = useState(true);
  const [frequency, setFrequency] = useState(4);

  // Generar puntos de la curva 1D
  const width = 560;
  const height = 200;
  const numSamples = 120;

  // Ruido blanco discreto en nodos enteros
  const nodes = [0.2, 0.85, 0.15, 0.75, 0.35, 0.9, 0.1, 0.6];

  // Curva de interpolación lineal
  const linearPoints: [number, number][] = [];
  // Curva cuíntica de Perlin: 6t^5 - 15t^4 + 10t^3
  const perlinPoints: [number, number][] = [];

  for (let i = 0; i <= numSamples; i++) {
    const tGlobal = (i / numSamples) * (frequency);
    const index = Math.floor(tGlobal) % (nodes.length - 1);
    const tLocal = tGlobal - Math.floor(tGlobal);

    const y0 = nodes[index];
    const y1 = nodes[index + 1];

    const x = (i / numSamples) * width;

    // Lineal: lerp(y0, y1, t)
    const yLin = y0 + tLocal * (y1 - y0);
    linearPoints.push([x, height - yLin * (height - 30) - 15]);

    // Cuíntica: fade(t) = 6t^5 - 15t^4 + 10t^3
    const u = tLocal * tLocal * tLocal * (tLocal * (tLocal * 6 - 15) + 10);
    const yPerlin = y0 + u * (y1 - y0);
    perlinPoints.push([x, height - yPerlin * (height - 30) - 15]);
  }

  const linearPath = linearPoints.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const perlinPath = perlinPoints.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  return (
    <div className="slide-split-layout">
      <div className="slide-text-pane">
        <p className="slide-lead">
          El ruido blanco genera estática desconectada. El <strong>Ruido de Perlin</strong> (Ken Perlin, 1985) interpola gradientes con continuidad de segundo orden (\(C^2\)).
        </p>

        <div className="math-formula-card">
          <div className="formula-header">Función de Suavizado Cuíntica de Perlin:</div>
          <div className="formula-math">
            \(f(t) = 6t^5 - 15t^4 + 10t^3\)
          </div>
          <div className="formula-properties">
            <span>✓ \(f(0) = 0, \; f(1) = 1\)</span>
            <span>✓ Derivada primera: \(f'(0) = f'(1) = 0\)</span>
            <span>✓ Derivada segunda: \(f''(0) = f''(1) = 0\)</span>
          </div>
        </div>

        <div className="interactive-controls-card">
          <div className="slider-header-simple">
            <span>Frecuencia de muestreo:</span>
            <strong>{frequency} nodos</strong>
          </div>
          <input
            type="range"
            min="2"
            max="6"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value, 10))}
          />

          <div className="curve-toggles">
            <button
              className={`curve-toggle-btn ${showLinear ? 'active-linear' : ''}`}
              onClick={() => setShowLinear(!showLinear)}
            >
              <span className="dot dot-linear" />
              <span>Interpolación Lineal (\(C^0\))</span>
            </button>
            <button
              className={`curve-toggle-btn ${showPerlin ? 'active-perlin' : ''}`}
              onClick={() => setShowPerlin(!showPerlin)}
            >
              <span className="dot dot-perlin" />
              <span>Suavizado Cuíntico Perlin (\(C^2\))</span>
            </button>
          </div>
        </div>
      </div>

      <div className="slide-graph-pane">
        <div className="svg-graph-box">
          <svg viewBox={`0 0 ${width} ${height}`} className="noise-svg">
            {/* Grilla de fondo */}
            <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
            <line x1="0" y1={height - 15} x2={width} y2={height - 15} stroke="currentColor" strokeOpacity="0.2" />

            {/* Curva lineal */}
            {showLinear && (
              <path d={linearPath} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 3" />
            )}

            {/* Curva de Perlin cuíntica */}
            {showPerlin && (
              <path d={perlinPath} fill="none" stroke="#10b981" strokeWidth="3.5" />
            )}
          </svg>
          <div className="graph-legend-bar">
            {showLinear && <span className="legend-chip linear">Lineal: Aristas angulares</span>}
            {showPerlin && <span className="legend-chip perlin">Perlin: Curva orgánica sin quiebres</span>}
          </div>
        </div>
        <p className="graph-caption">
          La curva cuíntica elimina los artefactos visuales y asegura pendientes suaves en colinas y valles.
        </p>
      </div>
    </div>
  );
};

/**
 * Slide 9: Interactivo de Fractales y Octavas (fBm)
 */
const InteractiveFractalSlide: React.FC = () => {
  const [octaves, setOctaves] = useState(3);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dibujar mapa de alturas 2D en canvas de 120x120
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 120;
    const perlin = new PerlinNoise(42089);
    const imgData = ctx.createImageData(size, size);
    const data = imgData.data;

    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const x = (px - size / 2) * 2.8;
        const z = (py - size / 2) * 2.8;
        const h = sampleFBM(x, z, octaves, 1.2, 14, 'ondulado', perlin);

        // Mapear [-14, 14] a [0, 255]
        const val = Math.max(0, Math.min(255, Math.floor(((h + 14) / 28) * 255)));
        const idx = (py * size + px) * 4;
        data[idx] = val;
        data[idx + 1] = val;
        data[idx + 2] = val;
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }, [octaves]);

  return (
    <div className="slide-split-layout">
      <div className="slide-text-pane">
        <p className="slide-lead">
          Inspirado en la geometría fractal de <strong>Benoît Mandelbrot</strong>: la topografía natural se modela sumando capas de ruido armónicas (Movimiento Browniano Fraccional).
        </p>

        <div className="math-formula-card">
          <div className="formula-header">Fórmula del Movimiento Browniano Fraccional (fBm):</div>
          <div className="formula-math">
            {"Relieve(x, z) = ∑ [ Ruido(fᵢ · x, fᵢ · z) / 2ⁱ ]"}
          </div>
          <div className="formula-properties">
            <span>• <strong>Lacunaridad = 2.0:</strong> La frecuencia espacial se duplica por capa.</span>
            <span>• <strong>Ganancia = 0.5:</strong> La amplitud vertical se reduce a la mitad.</span>
          </div>
        </div>

        <div className="interactive-controls-card">
          <div className="slider-header-simple">
            <span>Número de Octavas (N):</span>
            <strong className="badge-octave">{octaves} {octaves === 1 ? 'capa' : 'capas'}</strong>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={octaves}
            onChange={(e) => setOctaves(parseInt(e.target.value, 10))}
          />
          <div className="octaves-explanation">
            {octaves === 1 && 'Octava 1: Solo colinas base muy suaves, sin detalle fino.'}
            {octaves === 2 && 'Octava 2: Comienzan a formarse lomas intermedias.'}
            {octaves === 3 && 'Octava 3: Buen balance entre volumen y rugosidad natural.'}
            {octaves === 4 && 'Octava 4: Ondulación rica con textura topográfica.'}
            {octaves >= 5 && `Octava ${octaves}: Detalle de alta frecuencia con riscos y micro-relieve.`}
          </div>
        </div>
      </div>

      <div className="slide-viewport-dual-pane">
        <div className="heightmap-preview-card">
          <span className="card-micro-label">Mapa de Alturas 2D</span>
          <canvas ref={canvasRef} width={120} height={120} className="slide-heightmap-canvas" />
          <span className="card-micro-sub">Escala de grises (Blanco = Cumbre, Negro = Valle)</span>
        </div>
        <div className="mini-scene-wrapper">
          <MiniScene seed={42089} octaves={octaves} showBuildings={false} cameraPreset="diagonal" />
          <span className="mini-viewport-caption">Malla 3D calculada con {octaves} octavas</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Slide 10: Interactivo de Ciudad, Lote y Asoleamiento
 */
const InteractiveCitySlide: React.FC = () => {
  const [hour, setHour] = useState(15);

  return (
    <div className="slide-split-layout">
      <div className="slide-text-pane">
        <p className="slide-lead">
          La ciudad y el lote del proyecto integran reglas matemáticas para asegurar coherencia urbana y estudios de asoleamiento:
        </p>

        <ul className="slide-checklist">
          <li>
            <strong>Trama urbana ortogonal:</strong> Cuadrícula modular cada 12 m con calzadas de 4.4 m y aceras peatonales.
          </li>
          <li>
            <strong>Decaimiento radial:</strong> Altura de edificios decreciente hacia la periferia: \(H \propto (1 - d/R)^{1.5}\).
          </li>
          <li>
            <strong>Nivelación con smoothstep:</strong> El terreno se aplana hacia la base del lote en un radio perimetral de 18 m.
          </li>
          <li>
            <strong>Estudio solar dinámico:</strong> Trayectoria cenital del sol con cálculo de sombras volumétricas en tiempo real.
          </li>
        </ul>

        <div className="interactive-controls-card">
          <div className="slider-header-simple">
            <span>Hora del día (Estudio solar):</span>
            <strong className="badge-octave">
              {Math.floor(hour).toString().padStart(2, '0')}:
              {Math.floor((hour % 1) * 60).toString().padStart(2, '0')} h
            </strong>
          </div>
          <input
            type="range"
            min="6"
            max="18"
            step="0.2"
            value={hour}
            onChange={(e) => setHour(parseFloat(e.target.value))}
          />
          <div className="hour-quick-strip">
            <button className="quick-chip" onClick={() => setHour(8)}>08:00 (Mañana)</button>
            <button className="quick-chip" onClick={() => setHour(12)}>12:00 (Cenit)</button>
            <button className="quick-chip" onClick={() => setHour(17)}>17:00 (Tarde)</button>
          </div>
        </div>
      </div>

      <div className="slide-viewport-pane">
        <MiniScene
          seed={42089}
          hourOfDay={hour}
          showBuildings={true}
          showLot={true}
          cameraPreset="diagonal"
        />
        <span className="mini-viewport-caption">
          Volumen propuesto (naranja) y proyección de sombras solares a las {Math.floor(hour)}:00 h
        </span>
      </div>
    </div>
  );
};

/**
 * Slide 14: Cierre con Código QR generado en el cliente
 */
const ClosingSlide: React.FC = () => {
  const [qrUrl, setQrUrl] = useState<string>('');

  useEffect(() => {
    // Generar URL del despliegue actual o fallback
    const targetUrl = typeof window !== 'undefined' ? window.location.href.split('#')[0] : 'https://terra-urbis.vercel.app';
    QRCode.toDataURL(targetUrl, {
      width: 220,
      margin: 1.5,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then((url) => setQrUrl(url))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="slide-center-layout">
      <div className="closing-content-box">
        <div className="closing-badge">¡Muchas Gracias!</div>
        <h2 className="closing-title">Terra Urbis</h2>
        <p className="closing-subtitle">
          Generador de Terrenos y Ciudades Procedurales para Arquitectura e Ingeniería
        </p>

        <div className="closing-grid">
          <div className="closing-team-card">
            <h3>Equipo de Desarrollo:</h3>
            <ul className="closing-members-list">
              <li><strong>Andre Felipe Valencia Chacon</strong> · A00435495</li>
              <li><strong>Sebastian Arenas Leal</strong> · A00430300</li>
              <li><strong>Emanuel Quintero Ortiz</strong> · A00435351</li>
            </ul>
            <div className="course-tag">
              <span>Pensamiento Matemático</span> · <span>Prof. Jimy Nelson Ramirez Agudelo</span>
            </div>
          </div>

          <div className="closing-qr-card">
            {qrUrl ? (
              <img src={qrUrl} alt="Código QR hacia la aplicación web Terra Urbis" className="qr-image" />
            ) : (
              <div className="qr-placeholder">Generando QR...</div>
            )}
            <p className="qr-label">Escanea para explorar la aplicación interactiva</p>
          </div>
        </div>

        <button
          className="slide-cta-btn"
          onClick={() => {
            window.location.hash = '';
          }}
        >
          <ExternalLink size={16} />
          <span>Volver al Generador 3D Principal</span>
        </button>
      </div>
    </div>
  );
};

/* ==========================================================================
   ARREGLO DE LAS 14 DIAPOSITIVAS TIPADAS
   ========================================================================== */

export const SLIDES: SlideData[] = [
  // 1. Portada
  {
    id: 1,
    title: 'Terra Urbis',
    subtitle: 'Generación procedural de terrenos y ciudades',
    badge: 'Proyecto Final · Pensamiento Matemático',
    notes: 'Dar la bienvenida al profesor Jimy Ramirez y a la clase. Presentar el nombre del proyecto Terra Urbis y el objetivo de unir matemáticas formales con computación gráfica.',
    render: () => (
      <div className="slide-cover-layout">
        <div className="cover-glass-card">
          <div className="cover-tag">Proyecto Final · Pensamiento Matemático</div>
          <h1 className="cover-title">Terra Urbis</h1>
          <p className="cover-subtitle">Generación procedural de terrenos y ciudades</p>

          <div className="cover-meta-info">
            <div className="meta-block">
              <span className="meta-label">Grupo:</span>
              <strong className="meta-val">Six Sevenitos Sigmas Group</strong>
            </div>
            <div className="meta-block">
              <span className="meta-label">Profesor:</span>
              <strong className="meta-val">Jimy Nelson Ramirez Agudelo</strong>
            </div>
          </div>

          <div className="cover-instructions-bar">
            <span>Presiona <strong>Espacio</strong> o las flechas <strong>← →</strong> para avanzar</span>
          </div>
        </div>

        <div className="cover-background-scene">
          <MiniScene seed={42089} autoRotate={true} showBuildings={true} showLot={true} cameraPreset="diagonal" />
        </div>
      </div>
    ),
  },

  // 2. Equipo
  {
    id: 2,
    title: 'Equipo de Trabajo',
    subtitle: 'Six Sevenitos Sigmas Group · Ingeniería de Sistemas',
    badge: 'Integrantes',
    notes: 'Presentar a los tres miembros del equipo, todos estudiantes del programa de Ingeniería de Sistemas.',
    render: () => (
      <div className="slide-grid-3">
        <div className="team-member-card">
          <div className="member-avatar">👨‍💻</div>
          <h3 className="member-name">Andre Felipe Valencia Chacon</h3>
          <span className="member-code">Código: A00435495</span>
          <span className="member-program">Ingeniería de Sistemas</span>
        </div>

        <div className="team-member-card">
          <div className="member-avatar">💻</div>
          <h3 className="member-name">Sebastian Arenas Leal</h3>
          <span className="member-code">Código: A00430300</span>
          <span className="member-program">Ingeniería de Sistemas</span>
        </div>

        <div className="team-member-card">
          <div className="member-avatar">⚙️</div>
          <h3 className="member-name">Emanuel Quintero Ortiz</h3>
          <span className="member-code">Código: A00435351</span>
          <span className="member-program">Ingeniería de Sistemas</span>
        </div>
      </div>
    ),
  },

  // 3. Pregunta de investigación
  {
    id: 3,
    title: 'Pregunta de Investigación',
    subtitle: 'El punto de partida de nuestro estudio matemático',
    badge: 'Problema Central',
    notes: 'Explicar que los videojuegos modernos como Minecraft no guardan gigabytes de mapas; calculan la altura de cada bloque usando fórmulas matemáticas deterministas.',
    render: () => (
      <div className="slide-center-box">
        <div className="question-quote-card">
          <div className="question-mark-icon">
            <HelpCircle size={44} />
          </div>
          <blockquote className="research-question-text">
            "¿Cómo permiten las funciones matemáticas de ruido (como el ruido de Perlin) y las semillas pseudoaleatorias generar terrenos creíbles y reproducibles en mundos tipo Minecraft?"
          </blockquote>
        </div>

        <div className="question-pillars-row">
          <div className="pillar-item">
            <strong>1. Determinismo</strong>
            <span>La misma semilla produce siempre el mismo resultado matemático.</span>
          </div>
          <div className="pillar-item">
            <strong>2. Continuidad \(C^2\)</strong>
            <span>Sin quiebres ni saltos abruptos entre puntos cercanos del espacio.</span>
          </div>
          <div className="pillar-item">
            <strong>3. Autosimilitud</strong>
            <span>La naturaleza es fractal: rugosidad a todas las escalas de observación.</span>
          </div>
        </div>
      </div>
    ),
  },

  // 4. Objetivos
  {
    id: 4,
    title: 'Objetivos del Proyecto',
    subtitle: 'Metas académicas y de desarrollo tecnológico',
    badge: 'Propósito',
    notes: 'Detallar el objetivo general y los tres específicos, haciendo énfasis en cómo conectan las matemáticas teóricas con la arquitectura y la ingeniería industrial.',
    render: () => (
      <div className="slide-split-cards">
        <div className="objective-card general">
          <div className="obj-icon-title">
            <Target size={24} className="accent-icon" />
            <h3>Objetivo General</h3>
          </div>
          <p>
            Analizar las matemáticas detrás de la generación procedural de mundos (semillas, ruido y fractales) y aplicarlas en una herramienta web interactiva que ayude a estudiantes y profesionales de <strong>Arquitectura</strong> e <strong>Ingeniería Industrial</strong> a visualizar un terreno con su entorno urbano y asoleamiento.
          </p>
        </div>

        <div className="objective-card specifics">
          <div className="obj-icon-title">
            <BookOpen size={24} className="teal-icon" />
            <h3>Objetivos Específicos</h3>
          </div>
          <ol className="specific-list">
            <li>
              <strong>Explicar las matemáticas:</strong> Describir el funcionamiento del algoritmo Mulberry32, la interpolación cuíntica de Perlin y la suma armónica fractal (fBm).
            </li>
            <li>
              <strong>Comparar con Minecraft:</strong> Analizar las diferencias entre campos escalares de densidad 3D y mapas de alturas paramétricos 2D con trama urbana.
            </li>
            <li>
              <strong>Desarrollar la herramienta web:</strong> Implementar un visualizador 3D en tiempo real accesible desde navegador para estudiar implantación de lotes y pendientes.
            </li>
          </ol>
        </div>
      </div>
    ),
  },

  // 5. Justificación
  {
    id: 5,
    title: 'Justificación y Relevancia',
    subtitle: '¿Por qué estudiar la generación procedural?',
    badge: 'Motivación',
    notes: 'Destacar que los videojuegos son familiares para los estudiantes, pero esconden matemáticas rigurosas que además tienen aplicaciones industriales directas.',
    render: () => (
      <div className="slide-cards-grid-2x2">
        <div className="info-card">
          <div className="info-card-header">
            <span className="card-badge-num">01</span>
            <h4>Contexto cercano y cotidiano</h4>
          </div>
          <p>Los videojuegos populares como Minecraft son familiares, pero sus motores se basan en teoría matemática profunda de funciones y cálculo multivariable.</p>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <span className="card-badge-num">02</span>
            <h4>Un mundo infinito en un solo número</h4>
          </div>
          <p>Con solo almacenar un entero de 32 bits (la semilla), se describe un territorio infinito y reproducible sin consumir memoria de almacenamiento.</p>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <span className="card-badge-num">03</span>
            <h4>La naturaleza se modela con fractales</h4>
          </div>
          <p>Las funciones euclidianas clásicas (planos y esferas) no bastan para describir colinas y montañas; las leyes fractales capturan su rugosidad real.</p>
        </div>

        <div className="info-card highlight">
          <div className="info-card-header">
            <span className="card-badge-num">04</span>
            <h4>Aplicación profesional previa a planos</h4>
          </div>
          <p>Permite a un arquitecto o ingeniero ver en segundos cómo queda un lote dentro del relieve, con edificios circundantes y sombras reales antes de costosos estudios topográficos.</p>
        </div>
      </div>
    ),
  },

  // 6. Interdisciplinariedad
  {
    id: 6,
    title: 'Enfoque Interdisciplinar',
    subtitle: 'Cruce transversal de seis áreas del conocimiento',
    badge: 'Articulación',
    notes: 'Explicar cómo este proyecto articula las matemáticas puras con la tecnología, el arte, la comunicación y dos ramas de la ingeniería y el diseño.',
    render: () => (
      <div className="slide-interdisciplinary-grid">
        <div className="discipline-card">
          <div className="disc-icon math"><Compass size={22} /></div>
          <h4>Matemáticas</h4>
          <p>Funciones de varias variables, interpolación cuíntica, series armónicas y álgebra lineal matricial.</p>
        </div>

        <div className="discipline-card">
          <div className="disc-icon tech"><Cpu size={22} /></div>
          <h4>Tecnología y Código</h4>
          <p>Desarrollo web moderno en React, TypeScript, Three.js, shaders y optimización con InstancedMesh.</p>
        </div>

        <div className="discipline-card">
          <div className="disc-icon art"><Palette size={22} /></div>
          <h4>Arte y Diseño</h4>
          <p>Composición visual, texturas procedurales, teoría del color, iluminación realista y experiencia de usuario (UX).</p>
        </div>

        <div className="discipline-card">
          <div className="disc-icon comm"><MessageSquare size={22} /></div>
          <h4>Comunicación</h4>
          <p>Transmisión didáctica de conceptos matemáticos complejos a través de visualizaciones interactivas intuitivas.</p>
        </div>

        <div className="discipline-card">
          <div className="disc-icon arch"><Building2 size={22} /></div>
          <h4>Arquitectura y Urbanismo</h4>
          <p>Implantación volumétrica en el terreno, densidades urbanas, trama ortogonal y análisis solar de sombras.</p>
        </div>

        <div className="discipline-card">
          <div className="disc-icon ind"><Factory size={22} /></div>
          <h4>Ingeniería Industrial</h4>
          <p>Localización de instalaciones, evaluación de pendientes para logística y explanación de bodegas.</p>
        </div>
      </div>
    ),
  },

  // 7. Matemáticas 1: Semillas
  {
    id: 7,
    title: 'Las Matemáticas, Parte 1: Semillas y Azar',
    subtitle: 'El algoritmo pseudoaleatorio determinista Mulberry32',
    badge: 'Fundamento Matemático',
    notes: 'Demostrar a la clase cómo cambiar la semilla genera mundos distintos, pero ingresar la misma semilla vuelve a reproducir el relieve y los edificios idénticos.',
    render: () => <InteractiveSeedSlide />,
  },

  // 8. Matemáticas 2: Ruido y suavizado
  {
    id: 8,
    title: 'Las Matemáticas, Parte 2: Ruido de Perlin',
    subtitle: 'Interpolación cuíntica suave y continuidad de clase C²',
    badge: 'Fundamento Matemático',
    notes: 'Explicar por qué la función cuíntica con derivadas cero en los extremos evita las aristas visibles que dejaba la interpolación lineal clásica.',
    render: () => <InteractiveNoiseSlide />,
  },

  // 9. Matemáticas 3: Fractales y octavas
  {
    id: 9,
    title: 'Las Matemáticas, Parte 3: Fractales y Octavas',
    subtitle: 'Movimiento Browniano Fraccional (fBm) y la geometría de Mandelbrot',
    badge: 'Fundamento Matemático',
    notes: 'Mover el slider de octavas frente al público para mostrar cómo se pasa de una simple duna lisa a una montaña rugosa con ricos detalles.',
    render: () => <InteractiveFractalSlide />,
  },

  // 10. La ciudad y el lote
  {
    id: 10,
    title: 'La Ciudad y el Lote del Proyecto',
    subtitle: 'Reglas espaciales, nivelación smoothstep y asoleamiento',
    badge: 'Aplicación Espacial',
    notes: 'Mover el slider de hora para mostrar cómo la posición del sol altera la sombra arrojada por el volumen del lote sobre el terreno y las calles.',
    render: () => <InteractiveCitySlide />,
  },

  // 11. Comparación con Minecraft
  {
    id: 11,
    title: 'Comparación con Minecraft',
    subtitle: 'Generación por densidad 3D frente a mapas de elevación 2D',
    badge: 'Estudio Comparativo',
    notes: 'Explicar la diferencia matemática entre muestrear ruido en 3 dimensiones (permite cuevas y voladizos) frente a mapas de alturas 2D optimizados para arquitectura.',
    render: () => (
      <div className="slide-compare-grid">
        <div className="compare-card minecraft">
          <div className="compare-header">
            <span className="compare-tag">Minecraft (Mojang)</span>
            <h3>Ruido Volumétrico 3D</h3>
          </div>
          <ul className="compare-features">
            <li><strong>Espacio tridimensional:</strong> Muestrea ruido en coordenadas (x, y, z). Si Densidad(x, y, z) &gt; 0 se coloca un bloque.</li>
            <li><strong>Topología compleja:</strong> Permite cuevas subterráneas, túneles, arcos de piedra y voladizos flotantes.</li>
            <li><strong>Biomas climáticos:</strong> Combina mapas de temperatura, humedad, continentalidad y erosión para determinar el bioma.</li>
            <li><strong>Costo computacional:</strong> Requiere generar y almacenar millones de bloques discretos organizados en *chunks*.</li>
          </ul>
          <div className="visual-placeholder minecraft-box">
            <span>[ Campo de densidad 3D · Cuevas y Salientes ]</span>
          </div>
        </div>

        <div className="compare-card terra">
          <div className="compare-header">
            <span className="compare-tag">Terra Urbis (Nuestro generador)</span>
            <h3>Mapa de Alturas 2D + Ciudad</h3>
          </div>
          <ul className="compare-features">
            <li><strong>Función continua 2D:</strong> La cota vertical es función directa de la posición: \(y = f(x, z)\).</li>
            <li><strong>Optimizado para arquitectura:</strong> Sin huecos invertidos, ideal para nivelación de explanadas y estudios de asoleamiento.</li>
            <li><strong>Trama urbana paramétrica:</strong> Reglas ortogonales integradas para calzadas, aceras y distribución de edificios.</li>
            <li><strong>Rendimiento en navegador:</strong> Renderizado instantáneo a 60 FPS en mallas continuas con InstancedMesh.</li>
          </ul>
          <div className="visual-placeholder terra-box">
            <span>[ Superficie paramétrica 2D · Malla continua continua ]</span>
          </div>
        </div>
      </div>
    ),
  },

  // 12. Usos y aplicaciones
  {
    id: 12,
    title: 'Usos Profesionales y Aplicaciones',
    subtitle: 'Valor aplicado para la toma de decisiones en obra y logística',
    badge: 'Impacto Práctico',
    notes: 'Demostrar que esta herramienta no es solo un ejercicio escolar; resuelve problemas reales de visualización antes de pasar a fases costosas de ingeniería.',
    render: () => (
      <div className="slide-two-columns">
        <div className="application-card arch">
          <div className="app-card-header">
            <Building2 size={28} className="app-icon" />
            <div>
              <h3>Arquitectura y Urbanismo</h3>
              <span>Implantación, entorno y asoleamiento</span>
            </div>
          </div>
          <ul className="app-list">
            <li><strong>Evaluación rápida de emplazamiento:</strong> Ubicar el volumen de anteproyecto en el lote y validar su escala frente a las alturas vecinas.</li>
            <li><strong>Estudio de asoleamiento y sombras:</strong> Analizar qué calles o fachadas colindantes quedan en sombra a las 9:00, 12:00 o 16:00 h.</li>
            <li><strong>Comprensión topográfica intuitiva:</strong> Entender el desnivel del terreno para planear accesos peatonales y vehiculares.</li>
            <li><strong>Presentación a clientes:</strong> Visualización estética y limpia en fase conceptual previa a modelos BIM detallados.</li>
          </ul>
        </div>

        <div className="application-card ind">
          <div className="app-card-header">
            <Factory size={28} className="app-icon" />
            <div>
              <h3>Ingeniería Industrial</h3>
              <span>Plantas, bodegas y logística de suelo</span>
            </div>
          </div>
          <ul className="app-list">
            <li><strong>Localización de plantas y bodegas:</strong> Ubicar instalaciones industriales considerando pendientes y accesibilidad vial.</li>
            <li><strong>Estimación de explanación:</strong> Visualizar el impacto de la nivelación requerida para patios de maniobra y bodegas de almacenamiento.</li>
            <li><strong>Logística de transporte:</strong> Descartar zonas con pendientes excesivas que dificulten el acceso de camiones de carga pesada.</li>
            <li><strong>Riesgo de inundación:</strong> Analizar la distancia vertical respecto a la cota del nivel de agua para evitar anegamientos.</li>
          </ul>
        </div>
      </div>
    ),
  },

  // 13. Fuentes
  {
    id: 13,
    title: 'Fuentes y Bibliografía',
    subtitle: 'Rigor científico y referencias seminales de la literatura',
    badge: 'Referencias',
    notes: 'Mencionar los autores clásicos en los que se basó la investigación, desde Ken Perlin y Mandelbrot hasta las publicaciones de generación de ciudades de SIGGRAPH.',
    render: () => (
      <div className="slide-bibliography-list">
        <div className="bib-item">
          <div className="bib-num">1</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Perlin, K. (1985).</strong> An image synthesizer. <em>Computer Graphics (SIGGRAPH '85 Proceedings)</em>, 19(3), 287–296.
            </p>
            <span className="bib-desc">Artículo seminal que introdujo el ruido de gradiente coherente en computación gráfica.</span>
          </div>
        </div>

        <div className="bib-item">
          <div className="bib-num">2</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Mandelbrot, B. B. (1982).</strong> <em>The Fractal Geometry of Nature</em>. W. H. Freeman and Company.
            </p>
            <span className="bib-desc">Texto fundamental sobre la autosimilitud y el modelado fractal de montañas y costas naturales.</span>
          </div>
        </div>

        <div className="bib-item">
          <div className="bib-num">3</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Shaker, N., Togelius, J., & Nelson, M. J. (2016).</strong> <em>Procedural Content Generation in Games</em>. Springer.
            </p>
            <span className="bib-desc">Compendio exhaustivo sobre algoritmos procedurales para mundos de videojuegos y mapas.</span>
          </div>
        </div>

        <div className="bib-item">
          <div className="bib-num">4</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Parish, Y. I. H., & Müller, P. (2001).</strong> Procedural modeling of cities. <em>ACM SIGGRAPH 2001 Proceedings</em>, 301–308.
            </p>
            <span className="bib-desc">Base de las reglas urbanas para generación de trazados viales y manzanas ortogonales.</span>
          </div>
        </div>

        <div className="bib-item">
          <div className="bib-num">5</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Müller, P., Wonka, P., Haegler, S., Ulmer, A., & Van Gool, L. (2006).</strong> Procedural modeling of buildings. <em>ACM Transactions on Graphics (TOG)</em>, 25(3), 614–623.
            </p>
            <span className="bib-desc">Gramáticas de forma para la variedad volumétrica de fachadas y rascacielos.</span>
          </div>
        </div>

        <div className="bib-item">
          <div className="bib-num">6</div>
          <div className="bib-content">
            <p className="bib-citation">
              <strong>Minecraft Wiki (Mojang).</strong> <em>World generation and biome distribution algorithms</em>.
            </p>
            <span className="bib-desc">Documentación técnica sobre las etapas de muestreo de ruido de densidad y biomas en el juego.</span>
          </div>
        </div>
      </div>
    ),
  },

  // 14. Cierre
  {
    id: 14,
    title: 'Cierre y Conclusiones',
    subtitle: 'Código QR y acceso directo a la aplicación web interactiva',
    badge: 'Agradecimientos',
    notes: 'Agradecer a todos por su atención y responder preguntas de los compañeros o el profesor.',
    render: () => <ClosingSlide />,
  },
];
