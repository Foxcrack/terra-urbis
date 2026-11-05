/**
 * Terra Urbis - Componente Contenedor de la Presentación
 * Gestiona:
 * - Enrutamiento por hash (#/presentacion y #/presentacion/3)
 * - Navegación por teclado (Flechas, Espacio, Esc, F para pantalla completa, N para notas)
 * - Gestos táctiles de deslizamiento (swipe) en móviles
 * - Barra de progreso, contador, puntos de navegación y botones anterior/siguiente
 * - Panel desplegable de notas del orador
 * - Modo pantalla completa con Fullscreen API
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  X,
  Keyboard,
} from 'lucide-react';
import { SLIDES } from './slides';
import './presentation.css';

interface PresentationProps {
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const Presentation: React.FC<PresentationProps> = ({ onClose, theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Obtener índice de diapositiva a partir del hash (#/presentacion/X)
  const getSlideIndexFromHash = useCallback((): number => {
    const hash = window.location.hash;
    const match = hash.match(/#\/presentacion\/(\d+)/);
    if (match && match[1]) {
      const parsed = parseInt(match[1], 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= SLIDES.length) {
        return parsed - 1;
      }
    }
    return 0; // Diapositiva 1 por defecto
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(getSlideIndexFromHash);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  // Sincronizar índice cuando cambia el hash externo o el historial
  useEffect(() => {
    const handleHashChange = () => {
      const idx = getSlideIndexFromHash();
      setCurrentIndex(idx);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [getSlideIndexFromHash]);

  // Actualizar hash cuando cambia currentIndex
  const goToSlide = useCallback((index: number) => {
    const target = Math.max(0, Math.min(SLIDES.length - 1, index));
    setCurrentIndex(target);
    window.location.hash = `#/presentacion/${target + 1}`;
  }, []);

  const nextSlide = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, goToSlide]);

  // Pantalla completa
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar si el usuario está escribiendo en un input numérico interactivo
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowNotes((prev) => !prev);
      } else if (e.key === 'h' || e.key === 'H' || e.key === '?') {
        e.preventDefault();
        setShowHelp((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onClose, toggleFullscreen]);

  // Gestos táctiles de deslizamiento (Swipe) en móvil
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Solo si el movimiento horizontal predomina y supera los 45 px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentSlide = SLIDES[currentIndex];
  const progressPercent = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <div
      ref={containerRef}
      className="presentation-root"
      data-theme={theme}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Presentación final de Terra Urbis"
    >
      {/* Barra de progreso superior */}
      <div className="presentation-progress-track">
        <div
          className="presentation-progress-fill"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={SLIDES.length}
        />
      </div>

      {/* Barra de Navegación y Encabezado Superior */}
      <header className="presentation-header">
        <div className="header-left">
          <button
            className="presentation-btn back-btn"
            onClick={onClose}
            title="Volver al generador principal (Esc)"
            aria-label="Volver al generador"
          >
            <ArrowLeft size={16} />
            <span className="btn-text">Volver al Generador</span>
          </button>
        </div>

        <div className="header-center">
          {currentSlide.badge && <span className="slide-badge-pill">{currentSlide.badge}</span>}
          <span className="slide-counter-badge">
            {currentIndex + 1} / {SLIDES.length}
          </span>
        </div>

        <div className="header-right">
          <button
            className={`presentation-btn icon-only ${showNotes ? 'active' : ''}`}
            onClick={() => setShowNotes(!showNotes)}
            title="Mostrar / ocultar notas del orador (N)"
            aria-label="Notas del orador"
          >
            <FileText size={16} />
          </button>

          <button
            className={`presentation-btn icon-only ${showHelp ? 'active' : ''}`}
            onClick={() => setShowHelp(!showHelp)}
            title="Atajos de teclado (H o ?)"
            aria-label="Ayuda de teclado"
          >
            <Keyboard size={16} />
          </button>

          <button
            className="presentation-btn icon-only"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)'}
            aria-label="Pantalla completa"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      {/* Contenedor Principal de la Diapositiva (Canvas 16:9 adaptable) */}
      <main className="presentation-stage">
        <div className="presentation-slide-card" key={currentSlide.id}>
          {/* Encabezado interno de diapositiva (excepto en portada y cierre) */}
          {currentSlide.id !== 1 && currentSlide.id !== 14 && (
            <div className="slide-inner-header">
              <h2 className="slide-main-title">{currentSlide.title}</h2>
              {currentSlide.subtitle && <p className="slide-sub-title">{currentSlide.subtitle}</p>}
            </div>
          )}

          {/* Contenido renderizado de la diapositiva */}
          <div className="slide-content-body">{currentSlide.render()}</div>
        </div>
      </main>

      {/* Controles de Navegación Inferiores */}
      <footer className="presentation-footer">
        <button
          className="nav-arrow-btn prev"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          title="Diapositiva anterior (← o Shift+Espacio)"
          aria-label="Diapositiva anterior"
        >
          <ChevronLeft size={20} />
          <span className="nav-arrow-label">Anterior</span>
        </button>

        {/* Puntos de navegación rápida */}
        <nav className="dots-navigation-bar" aria-label="Navegación de diapositivas">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              className={`nav-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              title={`Diapositiva ${idx + 1}: ${slide.title}`}
              aria-label={`Ir a diapositiva ${idx + 1}: ${slide.title}`}
            />
          ))}
        </nav>

        <button
          className="nav-arrow-btn next"
          onClick={nextSlide}
          disabled={currentIndex === SLIDES.length - 1}
          title="Siguiente diapositiva (→ o Espacio)"
          aria-label="Siguiente diapositiva"
        >
          <span className="nav-arrow-label">Siguiente</span>
          <ChevronRight size={20} />
        </button>
      </footer>

      {/* Drawer de Notas del Orador (Tecla N) */}
      {showNotes && (
        <aside className="speaker-notes-drawer" role="complementary" aria-label="Notas del orador">
          <div className="notes-header">
            <div className="notes-title">
              <FileText size={16} />
              <span>Notas del Orador · Diapositiva {currentIndex + 1}</span>
            </div>
            <button
              className="notes-close-btn"
              onClick={() => setShowNotes(false)}
              aria-label="Cerrar notas"
            >
              <X size={16} />
            </button>
          </div>
          <div className="notes-content">
            <p>{currentSlide.notes}</p>
          </div>
        </aside>
      )}

      {/* Modal de Atajos de Teclado (Tecla H) */}
      {showHelp && (
        <div className="keyboard-help-overlay" onClick={() => setShowHelp(false)}>
          <div className="keyboard-help-card" onClick={(e) => e.stopPropagation()}>
            <div className="help-card-header">
              <h3>Atajos de Teclado</h3>
              <button className="help-close-btn" onClick={() => setShowHelp(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="help-keys-grid">
              <div className="key-row">
                <kbd>→</kbd> / <kbd>Espacio</kbd>
                <span>Siguiente diapositiva</span>
              </div>
              <div className="key-row">
                <kbd>←</kbd>
                <span>Diapositiva anterior</span>
              </div>
              <div className="key-row">
                <kbd>F</kbd>
                <span>Pantalla completa</span>
              </div>
              <div className="key-row">
                <kbd>N</kbd>
                <span>Notas del orador</span>
              </div>
              <div className="key-row">
                <kbd>Esc</kbd>
                <span>Salir al generador</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

