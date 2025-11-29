# Walkthrough - Week 1: Setup & Architecture

## Accomplishments
- **Project Initialization**: Created `package.json` and installed dependencies (`kaplay`, `electron`, `electron-forge`).
- **Single Source Architecture**: Configured the project to run as both a Web App and a Windows Executable from the same codebase.
- **Core Files**:
    - `src/game.js`: Kaplay entry point with the "Input Adapter" pattern.
    - `src/main.js`: Electron main process.
    - `src/index.html`: Shared entry point.
- **Build System**: Configured `electron-forge` to build `.exe` files.

## How to Run

### 1. Web Mode (Development)
Runs the game in a browser environment (via Vite).
```bash
npm run dev
```
*Open the URL shown in the terminal (usually http://localhost:5173)*

### 2. Electron Mode (Desktop)
Runs the game in a native Windows window.
```bash
npm start
```

### 3. Build Executable
Creates a distributable `.exe` file for Windows.
```bash
npm run make
```
*Output will be in the `out/` directory.*

## Verification Results
- [x] **Web Mode**: Verified via `npm run dev` (Vite starts correctly).
- [x] **Electron Mode**: Verified via `npm start` (App launches successfully).
- [x] **Build**: Verified via `npm run make` (Packaging process completes).
