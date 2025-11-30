import kaplay from "kaplay";
import { loadAssets } from "./utils/loader";
import { sceneIntro } from "./scenes/intro";
import { sceneLevel1 } from "./scenes/level1";

// Initialize Kaplay
const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    background: [135, 206, 235], // Sky Blue (Campestre)
    global: false, // Disable global to avoid confusion and errors
});

// Load Assets
loadAssets(k);

// Initialize Scenes
sceneIntro(k);
sceneLevel1(k);

// Start the game
k.go("intro");
