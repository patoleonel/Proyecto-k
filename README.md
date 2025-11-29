# Keila's Journey - 30 Años

> Videojuego de plataformas conmemorativo "Giftware" por los 30 años de Keila. Un viaje interactivo a través de las etapas de la vida, donde las decisiones y las compañías definen el camino.

## 🎮 Descripción
Este proyecto es un regalo digital ("Giftware") diseñado para celebrar un hito especial. El juego es un platformer 2D que narra metafóricamente el crecimiento y la evolución personal a través de 4 etapas de la vida.

## 🛠️ Tech Stack
-   **Motor**: [Kaplay.js](https://kaplayjs.com/) (Evolución de Kaboom.js)
-   **Desktop Wrapper**: [Electron](https://www.electronjs.org/)
-   **Bundler**: [Vite](https://vitejs.dev/)
-   **Lenguaje**: JavaScript (ES6+)

## 🚀 Cómo Ejecutar

### Requisitos
-   Node.js (v16 o superior)
-   NPM

### Instalación
```bash
npm install
```

### Desarrollo Web
Para probar el juego en el navegador con recarga en caliente (HMR):
```bash
npm run dev
```

### Construir Ejecutable (Windows)
Para generar el instalador y el ejecutable `.exe`:
```bash
npm run make
```
Los archivos generados estarán en la carpeta `out/make`.

### Limpiar Proyecto
Si tienes problemas de compilación:
```bash
npm run clean
```

## 🏗️ Estructura del Proyecto
-   `src/`: Código fuente del juego.
    -   `game.js`: Lógica principal y escenas.
    -   `main.js`: Proceso principal de Electron.
-   `dist/`: Código compilado por Vite (generado automáticamente).
-   `out/`: Ejecutables empaquetados por Electron Forge (generado automáticamente).

## 📝 Licencia
Este proyecto es un regalo personal. Todos los derechos reservados.
