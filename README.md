# El Viaje de Keila

Un videojuego de plataformas conmemorativo desarrollado para celebrar el 30 cumpleaños de Keila. Este proyecto es un "Giftware" diseñado para ser jugado tanto en la web como en una aplicación de escritorio.

## 🚀 Stack Tecnológico

Este proyecto utiliza tecnologías web modernas empaquetadas para escritorio:

*   **[Kaplay.js](https://kaplayjs.com/)**: Motor de videojuegos ligero y rápido (basado en Kaboom.js).
*   **[Electron](https://www.electronjs.org/)**: Para empaquetar el juego como una aplicación nativa de Windows (`.exe`).
*   **[Vite](https://vitejs.dev/)**: Empaquetador web ultrarrápido para el desarrollo y la construcción.
*   **GitHub Actions**: Para el despliegue automático de la versión web en GitHub Pages.

## 📋 Requisitos Previos

Para ejecutar o modificar este proyecto en tu computadora, necesitas tener instalado:

1.  **[Node.js](https://nodejs.org/)** (Versión 20 o superior recomendada).
2.  **Git** (Para clonar el repositorio).

## 🛠️ Instalación y Configuración

Si has hecho un fork o clonado este repositorio, sigue estos pasos para instalar todas las dependencias necesarias (definidas en `package.json`):

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TU_USUARIO/Proyecto-k.git
    cd Proyecto-k
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
    *Esto descargará e instalará automáticamente `kaplay`, `electron`, `vite` y todas las herramientas necesarias en la carpeta `node_modules`.*

## ▶️ Comandos de Desarrollo

El proyecto cuenta con varios scripts preconfigurados en `package.json`:

*   **Modo Desarrollo Web** (Rápido, para probar cambios):
    ```bash
    npm run dev
    ```
    *Abre un servidor local (ej. `http://localhost:5173`) con recarga automática.*

*   **Modo Desarrollo Electron** (Para probar la ventana nativa):
    ```bash
    npm start
    ```

*   **Construir Ejecutable** (Generar el `.exe`):
    ```bash
    npm run make
    ```
    *El ejecutable se generará en la carpeta `out/make`.*

## 📂 Estructura del Proyecto

El código ha sido modularizado para facilitar su mantenimiento:

```text
ProyectoKeila/
├── .github/workflows/   # Configuración de CI/CD (GitHub Actions)
├── fotos/               # Assets originales (imágenes)
├── src/                 # Código fuente del juego
│   ├── entities/        # Lógica de entidades (Jugador, Enemigos)
│   │   └── player.js    # Lógica de Keila/Maria Micaela
│   ├── scenes/          # Escenas del juego
│   │   ├── intro.js     # Pantalla de inicio
│   │   └── level1.js    # Etapa 1: Campestre
│   ├── utils/           # Utilidades generales
│   │   ├── input.js     # Adaptador de controles (Teclado/Touch)
│   │   └── loader.js    # Cargador centralizado de assets
│   ├── game.js          # Punto de entrada (Inicialización)
│   ├── main.js          # Proceso principal de Electron
│   └── index.html       # Punto de entrada Web
├── package.json         # Lista de dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── forge.config.js      # Configuración de Electron Forge
```

## 🎮 Controles

El juego utiliza un sistema de control híbrido:

*   **Teclado**: `ESPACIO` para saltar, Flechas `IZQ/DER` o `A/D` para moverse.
*   **Touch/Mouse**: Tocar la pantalla o hacer clic para saltar (el movimiento es automático o por zonas en versiones futuras).

## 📄 Licencia

Este proyecto es un regalo personal. Todos los derechos de las imágenes y assets pertenecen a Patricio Brite
