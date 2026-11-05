# 🏙️ Terra Urbis - Generador de Terrenos y Ciudades Procedurales

**Terra Urbis** es una aplicación web interactiva y didáctica diseñada para estudiantes y profesionales de **Arquitectura**, **Urbanismo** e **Ingeniería Industrial**. Permite generar y explorar en 3D mundos procedurales (planos, ondulados o montañosos), una trama urbana ortogonal con edificios generados algorítmicamente mediante `InstancedMesh`, y un **lote de proyecto** parametrizable para evaluar la inserción volumétrica en el entorno topográfico, incluyendo estudio solar y nivelación del suelo.

La aplicación incluye un **Módulo Didáctico ("Aprende")** interactivo que ilustra los principios matemáticos subyacentes: generadores pseudoaleatorios deterministas (PRNG), interpolación continua de Perlin 2D y superposición fractal de octavas (fBm).

---

## ✨ Novedades Gráficas y Visualización Arquitectónica

La versión actual incorpora mejoras gráficas de nivel profesional manteniendo un rendimiento óptimo de 60 FPS en laptop y dispositivos móviles:

### 1. Iluminación, Render y Postprocesado
- **Espacio de Color y Mapeo Tonal:** Pipeline calibrado con `outputColorSpace = THREE.SRGBColorSpace` y `ACESFilmicToneMapping` para un rango dinámico fotorrealista.
- **Sombras Suaves HD:** Sombras proyectadas con `PCFSoftShadowMap`, resolución de 2048×2048 px y bias ajustado contra artefactos o "acné" de sombras.
- **Oclusión Ambiental (GTAO):** Sombreado de contacto en esquinas de edificios, voladizos y calzadas para dar profundidad volumétrica.
- **Bloom Sutil:** Resplandor arquitectónico de ventanas encendidas y del lote en horas nocturnas sin lavar la escena.
- **Antialiasing FXAA:** Bordes nítidos y limpios sin costo excesivo de GPU.
- **Cielo Atmosférico Dinámico (24 Horas):** Simulación de dispersión Rayleigh y Mie con Three.js `Sky`. Ciclo continuo de sol y luna: amanecer dorado, mediodía azul cielo, atardecer cálido y noche con luz de luna.
- **Niebla Exponencial:** Niebla en el horizonte que se funde armónicamente con el color del cielo y la atmósfera a cada hora.

### 2. Edificios y Fachadas Procedurales
- **Texturas Procedurales en Canvas:**
  - **Mapa Difuso:** Cuadrícula arquitectónica modular con carpintería, marcos, antepechos y vidrio reflectante azulado oscuro.
  - **Mapa Emisivo Nocturno:** Ventanas iluminadas con distribución aleatoria determinista que se encienden al anochecer (fuera del rango de 6 a 18 h).
- **3 Tipologías Morfológicas:**
  1. *Torre Simple:* Cuerpo vertical esbelto con parapeto perimetral y casetón técnico en la azotea.
  2. *Torre con Retranqueo (Stepped Tower):* Podio base con cuerpo superior escalonado.
  3. *Bloque Bajo con Azotea:* Bloque horizontal con terraza practicable y acceso techado.
- **InstancedMesh de Alto Rendimiento:** Miles de superficies renderizadas en mínimas llamadas de dibujo (*draw calls*), con modulación cromática de caliza, travertino, concreto y vidrio.

### 3. Topografía, Calles y Vegetación
- **Coloración por Altura y Pendiente:** Los acantilados y laderas escarpadas exponen roca oscura automáticamente, mientras que las zonas llanas albergan pasto o arena, y las cotas altas acumulan nieve en pendientes suaves.
- **Textura de Micro-detalle:** Ruido de alta frecuencia en el material del terreno que evita el aspecto plano o borroso al situar la cámara a nivel peatonal.
- **Trazado de Calles Detallado:** Calzadas con asfalto oscuro, líneas discontinuas centrales y aceras peatonales de hormigón claro.
- **Árboles Procedurales Exteriores:** Vegetación estilizada en `InstancedMesh` situada en las áreas verdes fuera de la ciudad de forma determinista según la semilla.

### 4. Agua Procedural
- **Agua Dinámica:** Plano de agua con mapa de normales onduladas animadas en tiempo real.
- **Gradiente por Profundidad:** Aguas cristalinas y turquesas en la orilla, fundiéndose a azul marino profundo en el centro.
- **Línea de Espuma:** Borde claro delimitando la costa y la arena.

### 5. Lote de Proyecto (Enfoque Arquitectónico)
- **Volumen Naranja Translúcido:** Prisma de implantación con aristas blancas gruesas.
- **Plataforma y Anillo Luminoso:** Losa nivelada en el terreno con anillo y marco luminoso perimetral en tono neón/ámbar.
- **Etiqueta Flotante 3D:** Indicador proyectado en tiempo real con datos de superficie y altura: `Lote del proyecto · [Área] m² · [Altura] m`.
- **Modo Contexto:** Atenúa a semitransparente los edificios adyacentes en un radio de 65 m para observar el lote sin importar la densidad circundante.
- **Estudio de Sombras:** Enfatiza el contraste de sombras solares directas para evaluar la afectación y el asoleamiento a cualquier hora del día.

### 6. Controles, Calidad y Capturas
- **Selector de Calidad Gráfica:**
  - *Baja:* Render directo WebGL sin postprocesado (60 FPS estables en teléfonos móviles y laptops básicas).
  - *Media:* Bloom nocturno, vegetación exterior y antialiasing FXAA.
  - *Alta:* Oclusión Ambiental GTAO, sombras HD 2048 px y máxima densidad de vegetación.
  - *Detección automática:* Selecciona *Baja* en dispositivos móviles y *Alta* en ordenadores de sobremesa o portátiles.
- **Botón Capturar Imagen:** Exporta instantáneamente una captura en formato PNG de alta resolución (`terra-urbis-semilla-[semilla]-[hora]h.png`).
- **Transición Cinemática de Cámara:** Animación suave con amortiguación cúbica al alternar entre las vistas Aérea, Planta y Calle.
- **Tooltips Didácticos:** Explicación matemática interactiva en cada parámetro y deslizador.

---

## 📊 Módulo de Presentación del Proyecto (Pensamiento Matemático)

La aplicación incluye un sistema de presentación a pantalla completa con **15 diapositivas estructuradas e interactivas**, diseñado específicamente para proyectar en el aula y sustentar el proyecto final del curso:

### Acceso y Enrutamiento por Hash
- **Botón en Encabezado:** Acceso inmediato con el botón naranja **"Presentación"** en la barra superior.
- **Enlaces Directos Compartibles:** Enrutamiento nativo mediante hash en la URL:
  - `#/presentacion` abre la primera diapositiva.
  - `#/presentacion/3` abre directamente la diapositiva 3 (Pregunta de Investigación).
  - `#/presentacion/7` abre directamente la diapositiva 7 (Matemáticas: Semillas).
  - `#/presentacion/11` abre directamente la diapositiva 11 (Compendio de Fórmulas Matemáticas).
  - Compatible al 100% con despliegues en **Vercel** sin necesidad de configurar reescrituras de servidor.
- **Salir:** Botón *"Volver al Generador"* o tecla `Esc`.

### Controles de la Presentación
| Control | Acción |
| :--- | :--- |
| `→` / `Espacio` / `PageDown` | Avanzar a la siguiente diapositiva |
| `←` / `PageUp` | Retroceder a la diapositiva anterior |
| `F` | Alternar modo Pantalla Completa (*Fullscreen API*) |
| `N` | Mostrar u ocultar panel de **Notas del Orador** |
| `H` o `?` | Mostrar modal de atajos de teclado |
| `Esc` | Cerrar la presentación y regresar al generador 3D |
| **Swipe táctil** | Deslizar izquierda/derecha con el dedo en pantallas táctiles |
| **Puntos y Flechas** | Puntos clicables y botones Anterior / Siguiente en pantalla |

### Diapositivas Interactivas y Compendio Matemático
1. **Slide 1 — Portada:** Generador 3D en vivo con órbita automática girando suavemente de fondo.
2. **Slide 7 — Semillas:** Input interactivo para probar distintas semillas y verificar que la misma semilla reproduce exactamente el mismo mundo.
3. **Slide 8 — Ruido de Perlin:** Gráfica interactiva 1D y renderizado tipográfico con **KaTeX** de la función cuíntica $f(t) = 6t^5 - 15t^4 + 10t^3$ y sus derivadas de frontera ($C^2$).
4. **Slide 9 — Fractales (fBm):** Control deslizante de octavas (1 a 6) conectado simultáneamente a un mapa de alturas 2D en escala de grises y a la malla 3D en tiempo real.
5. **Slide 10 — Ciudad y Lote:** Control deslizante de hora solar para observar el movimiento de sombras arrojadas por el lote sobre las calles.
6. **Slide 11 — Compendio Matemático:** Cuadrícula de 8 fichas interactivas con todas las fórmulas aplicadas en el proyecto (PRNG, Fade $C^2$, Gradientes 2D, fBm fractal, Smoothstep sigmoide, Nivelación topográfica, Perfil radial de edificios y Trayectoria solar), su descripción matemática y su impacto directo en Terra Urbis.
7. **Slide 15 — Cierre:** Generador de código QR client-side (sin servicios externos) que permite a la audiencia escanear y abrir la app en sus dispositivos móviles.

### Cómo Editar o Personalizar las Diapositivas (`src/presentation/slides.tsx`)
Las diapositivas están modeladas como datos tipados en el arreglo `SLIDES` de [`slides.tsx`](file:///c:/Users/felip/OneDrive/Documentos/GitHub/terra-urbis/src/presentation/slides.tsx):
```typescript
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  notes: string;         // Notas privadas del orador (visibles con la tecla N)
  render: () => React.ReactNode; // Contenido visual y widgets interactivos
}
```
Para editar textos, miembros del equipo o notas pedagógicas, simplemente edita el elemento correspondiente en `SLIDES` sin tocar la lógica de navegación ni el motor Three.js.

### Gestión de Rendimiento WebGL
- Para garantizar un consumo de memoria mínimo y evitar que el navegador agote los contextos WebGL, **la escena 3D principal se desmonta automáticamente mientras la presentación está activa**.
- Las diapositivas con 3D utilizan [`MiniScene.tsx`](file:///c:/Users/felip/OneDrive/Documentos/GitHub/terra-urbis/src/presentation/MiniScene.tsx), una versión ligera con mallas optimizadas que libera (`dispose()`) geometrías, materiales y renderers inmediatamente al cambiar de diapositiva o salir.

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

### 6. Trayectoria Solar y Ciclo 24 Horas
El sol sigue un arco continuo cenital a lo largo de las 24 horas:
$$a = \frac{\text{hora} - 5.5}{14} \cdot \pi \quad (\text{durante el día})$$
$$(x, y, z)_{\text{sol}} = (-\cos(a) \times 280, \;\sin(a) \times 280 + 12, \;90)$$
En horario nocturno (hora $< 5.5$ o $> 19.5$), la luz solar se transforma en iluminación lunar fría con sombras tenues y se activan las texturas emisivas de las ventanas encendidas.

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
- **Three.js** (WebGL, OrbitControls, PCFSoftShadowMap, ACESFilmicToneMapping, Sky, EffectComposer, GTAOPass, UnrealBloomPass, FXAAShader)
- **Vite 5**
- **Lucide React** (Iconografía)
- **CSS3** con Variables de diseño, soporte para temas Claro / Oscuro y Blur de fondo (`backdrop-filter`).

---

Desarrollado con rigor matemático y enfoque en arquitectura y diseño urbano.
