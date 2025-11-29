# Implementation Plan - Week 1: Foundation & Architecture

# Goal Description
Establish the technical foundation for "Keila's Journey". The goal is to have a single codebase that runs as a Web App (Kaplay.js) and builds into a Windows Executable (Electron), with the basic game loop and input handling working.

## User Review Required
> [!IMPORTANT]
> **Single Source Verification**: We will use a standard Electron boilerplate but adapted for Kaplay. Please ensure you have Node.js installed on your Windows machine.

## Proposed Changes

### Project Root
#### [NEW] [package.json](file:///m:/ProyectoKeila/package.json)
- Define scripts: `start` (Electron), `dev` (Web), `make` (Build .exe).
- Dependencies: `kaplay`, `electron`, `@electron-forge/cli`.

#### [NEW] [forge.config.js](file:///m:/ProyectoKeila/forge.config.js)
- Configuration for building the Windows executable.

#### [NEW] [.gitignore](file:///m:/ProyectoKeila/.gitignore)
- Standard Node/Electron ignores (`node_modules`, `out`, `dist`).

### Source Code (`src/`)
#### [NEW] [index.html](file:///m:/ProyectoKeila/src/index.html)
- The container for the Kaplay canvas.
- Must be compatible with both Electron's renderer process and standard browsers.

#### [NEW] [main.js](file:///m:/ProyectoKeila/src/main.js)
- Electron's main process entry point.
- Handles window creation and lifecycle.

#### [NEW] [game.js](file:///m:/ProyectoKeila/src/game.js)
- **Kaplay Initialization**: `kaplay(...)`
- **Input Adapter**: Implementation of the hybrid input function from `CONTEXTO_MAESTRO.md`.
- **Scene Setup**: Basic `scene("intro", ...)` and `scene("game", ...)` placeholders.

## Verification Plan

### Automated Tests
- None for this stage (visual verification required).

### Manual Verification
1. **Web Mode**: Run `npm run dev` (or `npx vite`). Open localhost. Verify Kaplay canvas appears and "Jump" logs to console on Space/Click.
2. **Electron Mode**: Run `npm start`. Verify a Windows window opens with the same Kaplay canvas and input works.
3. **Build Test**: Run `npm run make`. Verify a `.exe` is generated in `out/` and runs independently.
