/**
 * Terra Urbis - Componente de estadísticas urbanas y topográficas
 * Muestra métricas clave en tiempo real: número de edificios, altura máxima,
 * desnivel topográfico y área de implantación del lote.
 */

import React from 'react';
import { WorldStats } from '../types';
import { Building2, Mountain, Ruler, Maximize2 } from 'lucide-react';

interface StatsProps {
  stats: WorldStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="stats-grid" aria-label="Estadísticas del entorno generado">
      <div className="stat-card">
        <div className="stat-icon-wrapper buildings">
          <Building2 size={18} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Edificios</span>
          <span className="stat-value">{stats.buildingCount.toLocaleString('es-ES')}</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-wrapper height">
          <Mountain size={18} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Altura máx. entorno</span>
          <span className="stat-value">{stats.maxSurroundingHeight.toFixed(1)} <small>m</small></span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-wrapper delta">
          <Ruler size={18} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Desnivel del terreno</span>
          <span className="stat-value">{stats.heightDelta.toFixed(1)} <small>m</small></span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-wrapper lot">
          <Maximize2 size={18} />
        </div>
        <div className="stat-info">
          <span className="stat-label">Área del lote</span>
          <span className="stat-value">{stats.lotArea.toFixed(0)} <small>m²</small></span>
        </div>
      </div>
    </div>
  );
};
