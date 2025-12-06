import kaplay from "kaplay";
import { loadAssets } from "./utils/loader";
import { sceneIntro } from "./scenes/intro";
import { sceneLevel1 } from "./scenes/level1";
import { sceneLevel2 } from "./scenes/level2";
import { sceneLevel3 } from "./scenes/level3";
import { sceneLevel4 } from "./scenes/level4";

// Initialize Kaplay
const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    background: [135, 206, 235], // Sky Blue (Campestre)
    global: false,
    pixelDensity: 2, // Improve visual quality on high-res screens
    crisp: true, // sharpen pixel art scaling
});

// Load Assets
loadAssets(k);

// Initialize Scenes
sceneIntro(k);
sceneLevel1(k);
sceneLevel2(k);
sceneLevel3(k);
sceneLevel4(k);

// Start the game
k.go("intro");
