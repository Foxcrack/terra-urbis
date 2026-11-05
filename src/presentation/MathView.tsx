/**
 * Terra Urbis - Componente para Renderizado de Fórmulas Matemáticas con KaTeX
 */

import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math, block]);

  return (
    <span
      className={`katex-wrapper ${block ? 'katex-block' : 'katex-inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

