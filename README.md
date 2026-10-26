# 🏙️ Terra Urbis - Generador de Terrenos y Ciudades Procedurales

**Terra Urbis** es una aplicación web interactiva y didáctica diseñada para estudiantes y profesionales de **Arquitectura**, **Urbanismo** e **Ingeniería Industrial**. Permite generar y explorar en 3D mundos procedurales (planos, ondulados o montañosos), una trama urbana ortogonal con edificios generados algorítmicamente mediante `InstancedMesh`, y un **lote de proyecto** parametrizable para evaluar la inserción volumétrica en el entorno topográfico, incluyendo estudio solar y nivelación del suelo.

La aplicación incluye un **Módulo Didáctico ("Aprende")** interactivo que ilustra los principios matemáticos subyacentes: generadores pseudoaleatorios deterministas (PRNG), interpolación continua de Perlin 2D y superposición fractal de octavas (fBm).

---

## 🚀 Inicio Rápido y Ejecución Local

Este proyecto utiliza **React 18**, **TypeScript**, **Three.js** y **Vite**, gestionado con **pnpm**.

### 1. Clonar e Instalar Dependencias
```bash
git clone https://github.com/Foxcrack/terra-urbis.git
cd terra-urbis
pnpm install
```

### 2. Iniciar el Servidor de Desarrollo
```bash
pnpm dev
```
Abre en tu navegador la URL indicada (usualmente `http://localhost:5173`).

### 3. Compilar para Producción
```bash
pnpm build
```
Generará el bundle optimizado en la carpeta `dist/`. Para previsualizarlo localmente:
```bash
pnpm preview
```

---

## 🌐 Despliegue en Vercel

Terra Urbis está 100% preparado para ser desplegado en **Vercel**:

1. Conecta tu repositorio de GitHub en [Vercel](https://vercel.com).
2. Vercel detectará automáticamente la configuración de Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
3. Haz clic en **Deploy**. El despliegue se completará en segundos.

---

## 📐 Fundamentos Matemáticos y Algoritmos Implementados

### 1. Generador Pseudoaleatorio: `mulberry32(seed)`
Las computadoras no producen aleatoriedad pura. Empleamos el algoritmo determinista **Mulberry32** de 32 bits. Dado un entero positivo como semilla, genera números pseudoaleatorios con distribución uniforme en $[0, 1)$:
```typescript
let s = Math.floor(seed) >>> 0;
s = (s + 0x6d2b79f5) >>> 0;
let t = Math.imul(s ^ (s >>> 15), 1 | s);
t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
```
**Propiedad de Reproducibilidad:** La misma semilla reproduce exactamente la misma topografía, trazado urbano y alturas de edificios bit a bit.

### 2. Ruido de Perlin 2D Clásico e Interpolación Cuíntica
Para evitar el aspecto caótico del ruido blanco, el ruido de gradiente asigna vectores directores en una cuadrícula entera y realiza una interpolación bilineal ponderada por la **función de suavizado cuíntica de Perlin**:
$$f(t) = 6t^5 - 15t^4 + 10t^3$$
Esta función garantiza derivadas primera y segunda continuas en $t=0$ y $t=1$ (suavidad de orden $C^2$), eliminando artefactos o aristas en las juntas de celda.

### 3. Movimiento Browniano Fraccional (fBm) y Modos de Relieve
La topografía natural se construye sumando $N$ capas o armónicos fractales (octavas, de 1 a 6):
$$\text{Relieve}(x, z) = \frac{\sum_{i=0}^{N-1} \text{amplitud}_i \cdot \text{Ruido}_i(x, z)}{\sum_{i=0}^{N-1} \text{amplitud}_i}$$
- **Frecuencia base:** $0.006 \times \text{escala}$
- **Lacunaridad:** $2.0$ (duplica la frecuencia espacial en cada octava)
- **Ganancia (Persistencia):** $0.5$ (reduce la amplitud a la mitad por capa)
- **Modos:**
  - **Plano:** Altura constante $= 0\text{ m}$.
  - **Ondulado:** fBm estándar con colinas suaves y continuas.
  - **Montañoso:** *Ridged multifractal noise*, donde $n = 1 - |n|$, luego $n = 2n^2 - 1$, con una amplificación de relieve de $\times 1.6$.

### 4. Nivelación Urbana y del Lote de Proyecto
- **Máscara de Ciudad:**
  $$\text{máscara} = 1 - \text{smoothstep}(0.6R, 1.1R, d)$$
  donde $d = \sqrt{x^2 + z^2}$ y $R$ es el radio de la ciudad. La cota del terreno se interpola hacia la cota central según $\text{máscara} \times (\text{nivelación}\% / 100)$.
- **Lote de Proyecto:**
  La cota del terreno se aplana hacia la cota del lote aplicando una interpolación $\text{smoothstep}$ dentro de una franja de transición perimetral de $18\text{ m}$.

### 5. Trama Urbana, Pendientes y Reglas de Edificación
- **Cuadrícula ortogonal:** Paso de $12\text{ m}$ con calles de $4.4\text{ m}$ de ancho.
- **Probabilidad de Edificación:** $\text{densidad} \times (1 - 0.55 \times d / R)$.
- **Altura de Edificios:**
  $$\text{Altura} = \text{alturaMax} \times \left(0.15 + 0.85 \times \left(1 - \frac{d}{R}\right)^{1.5}\right) \times (0.4 + 0.9 \times \text{aleatorio})$$
  con un mínimo de $4\text{ m}$ (más altos en el centro neurálgico).
- **Filtros de exclusión arquitectónica:**
  - Pendientes mayores a $7\text{ m}$ dentro de la huella de la celda.
  - Cotas bajo el nivel freático o plano de agua.
  - Colisión con el lote del proyecto y sus retiros.
- **InstancedMesh:** Todos los edificios se renderizan en una sola llamada de dibujo (*draw call*) con paleta cromática arquitectónica variada en tonos caliza, concreto y travertino.

### 6. Trayectoria Solar Paramétrica y Sombras
El sol sigue un arco cenital de 6:00 a 18:00 h:
$$a = \frac{\text{hora} - 6}{12} \cdot \pi$$
$$(x, y, z)_{\text{sol}} = (-\cos(a) \times 260, \;\sin(a) \times 260 + 30, \;90)$$
Luz direccional con mapa de sombras de $2048 \times 2048$, cámara ortográfica de frustum $\pm 230\text{ m}$, y variación atmosférica de color de cielo y niebla (dorado matutino, azul celeste al mediodía y magenta cálido al atardecer).

---

## 📱 Controles e Interacción

- **Rotación:** Clic izquierdo y arrastrar (o touch con 1 dedo).
- **Pan / Traslación:** Clic derecho o `Shift + Clic izquierdo` (o touch con 2 dedos).
- **Zoom:** Rueda del ratón o pellizco multitáctil.
- **Presets de Cámara:**
  - **Aérea:** Perspectiva isométrica general.
  - **Planta:** Vista cenital ortogonal topográfica.
  - **Calle:** Vista a nivel peatonal orientada hacia el lote de proyecto.
- **Diseño Responsive:** En pantallas menores a $720\text{ px}$ el panel de controles se ubica cómodamente bajo el visor 3D para una experiencia óptima en móviles y tabletas.

---

## 🛠️ Tecnologías

- **React 18**
- **TypeScript 5**
- **Three.js** (WebGL, OrbitControls, PCFSoftShadowMap, ACESFilmicToneMapping)
- **Vite 5**
- **Lucide React** (Iconografía limpia)
- **CSS3** con Variables personalizadas y compatibilidad de temas Claro / Oscuro (`prefers-color-scheme`).

---

Desarrollado con rigor matemático y enfoque en arquitectura y diseño urbano.
