# Task List - Proyecto Keila (30 Años)

## Week 1: Architecture & Core Setup
- [x] **Project Initialization**
    - [x] Initialize Git repository
    - [x] Initialize npm project (`package.json`)
    - [x] Install dependencies: `kaplay`, `electron`, `electron-forge`
    - [x] Configure `.gitignore`
- [x] **Electron + Kaplay Integration (Single Source)**
    - [x] Create `index.html` (Entry point)
    - [x] Create `main.js` (Electron main process)
    - [x] Create `game.js` (Kaplay entry point)
    - [x] Configure `forge.config.js`
    - [x] Verify "Run Web" (`vite` or simple serve)
    - [x] Verify "Run Electron" (`electron .`)
- [x] **Core Systems Implementation**
    - [x] **Input Adapter**: Implement hybrid keyboard/touch control (Section 4 of Contexto)
    - [x] **Scene Manager**: Basic structure for Stage 1, 2, 3, 4
    - [x] **Asset Loader**: Placeholder loading system
- [x] **CI/CD Setup**
    - [x] Configure GitHub Actions for Pages (Web)

## Week 2: Gameplay Mechanics (The "Giftware" Core)
- [ ] **Player Controller (Keila)**
    - [ ] Basic Movement (Run, Jump)
    - [ ] Evolution System (State Machine: Maria Micaela -> Keila)
    - [ ] Sprite State Management
- [ ] **Company System (Health/NPCs)**
    - [ ] Follower Logic (NPCs trailing player)
    - [ ] Protector Logic (Shield mechanic)
    - [ ] Harmful/Traitor Logic (Fake shield + Damage)
- [ ] **Interactables**
    - [ ] Items (Evolution triggers)
    - [ ] Obstacles (Damage sources)

## Week 3: Level Design & Content
- [ ] **Stage 1: Campestre (0-10)**
    - [ ] Environment Art & Layout
    - [ ] Specific Rules (Free evolution)
- [ ] **Stage 2: Escuela (10-20)**
    - [ ] Environment Art & Layout
    - [ ] Specific Rules (No involution to base)
- [ ] **Stage 3: Ciudad (20-25)**
    - [ ] Environment Art & Layout
    - [ ] Specific Rules (Traitor companies active)
- [ ] **Stage 4: Abstracto (25-30)**
    - [ ] Environment Art & Layout
    - [ ] Narrative Elements

## Week 4: Polish & Distribution
- [ ] **Audio Implementation**
    - [ ] BGM & SFX
- [ ] **UI/UX**
    - [ ] Start Screen
    - [ ] Game Over / Victory
- [ ] **Build & Deploy**
    - [ ] Final Web Build (GitHub Pages)
    - [ ] Final Windows Build (`.exe` via Electron Forge)
    - [ ] Final QA Testing
