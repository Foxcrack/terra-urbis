import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base './' permite desplegar en GitHub Pages (ej. /terra-urbis/), Vercel o localmente sin problemas de rutas
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200
  }
});
