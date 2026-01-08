# 🎂 Proyecto Keila - Felices 30

**"Proyecto Keila"** es una experiencia web interactiva creada como regalo de cumpleaños. Combina una "Landing Page" artística con un videojuego completo desarrollado en **GDevelop**, todo integrado y desplegado como una aplicación web moderna.

> *"Este es mi regalo para ti."*

🔗 **Jugar ahora:** [el-camino-de-keila.com.ar](https://el-camino-de-keila.com.ar)

---

## 🌟 Características Principales

### 1. Landing Page Interactiva
Una entrada visualmente impactante diseñada con **HTML5, CSS3 y Vanilla JavaScript**.
- **Personajes Flotantes**: Fondo dinámico con 15 personajes (fotos pixeladas) que flotan, rebotan y reaccionan al pasar el mouse (efecto "jitter" y escala).
- **Sistema de Grid Procedural**: Los personajes se distribuyen inteligentemente alrededor del contenido central para evitar superposiciones.
- **Video Secreto**: Acceso protegido por contraseña ("DOITFORHER") para ver un video especial de cumpleaños.
- **Audio**: Música de fondo ambiental ("Intro") integrada.

### 2. Videojuego Integrado (GDevelop)
El corazón del regalo es un juego de plataformas exportado desde **GDevelop 5** e incrustado en la carpeta `game_export/`.
- **Mecánica única**: Plataformas y narrativa personal.
- **Opción "No Nacer"**: Un botón/opción especial dentro del juego que permite al jugador "arrepentirse" y salir inmediatamente a la pantalla de inicio.
  - *Técnica*: Se implementó un "parche" en el código exportado (`code0.js`) y un override de `window.close()` para asegurar que esta acción redirija al usuario sin errores, ignorando las restricciones habituales de los navegadores.

### 3. Hosting & Despliegue
- **GitHub Pages**: Alojamiento gratuito y rápido.
- **Dominio Personalizado**: Configurado para responder en `el-camino-de-keila.com.ar` via Cloudflare/NIC.ar.

---

## 🚀 Stack Tecnológico

Este repositorio contiene dos partes principales que conviven:

1.  **Frontend (Raíz)**:
    *   **Vite**: Para el servidor de desarrollo local y hot-reloading.
    *   **Vanilla JS**: Lógica de la landing page.
    *   **CSS Pixel Art**: Estilos personalizados con fuentes y bordes pixelados.

2.  **Game (Carpeta `game_export`)**:
    *   **GDevelop 5**: Motor visual utilizado para crear el juego.
    *   **HTML5 Export**: El juego se exporta como una web app independiente que se carga desde la landing.

---

## 🛠️ Instalación y Desarrollo Local

Si deseas correr este proyecto en tu máquina:

### Requisitos
- [Node.js](https://nodejs.org/) (v16+)
- Git

### Pasos
1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/patoleonel/Proyecto-k.git
    cd Proyecto-k
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # Instala Vite y herramientas de desarrollo
    ```

3.  **Ejecutar servidor local:**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:5173` para ver la landing. El juego estará en `http://localhost:5173/game_export/`.

---

## 📂 Estructura del Proyecto

```text
Proyecto-k/
├── public/              # Assets estáticos
├── fotos/               # Fotos de personajes para el fondo
├── video/               # Video del regalo (protegido)
├── src/                 # Código fuente de la Landing Page
│   ├── main.js          # Lógica de fondo, contraseñas y música
│   └── style.css        # Estilos visuales
├── game_export/         # EL JUEGO (Exportado de GDevelop)
│   ├── index.html       # Entrada del juego (con parches de salida)
│   ├── code0.js         # Lógica compilada (parcheada para salida rápida)
│   └── data.js          # Datos del juego
├── index.html           # Landing Page Principal
├── package.json         # Scripts y dependencias (Vite)
└── README.md            # Documentación
```

## 📄 Notas de Desarrollo
- **Parche de Salida**: Si regeneras el juego en GDevelop, deberás volver a aplicar el parche en `game_export/code0.js` para que el botón "No nacer y salir" redirija correctamente a `../index.html`. Busca la función asociada al texto "No nacer y salir" y reemplaza `stopGame()` con `window.location.href = "../index.html"`.

---
*Hecho con ❤️ para Keila.*
