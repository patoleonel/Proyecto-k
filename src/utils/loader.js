// Level 1 Assets (New)
// Assets are in root/assets_nivel1, so we go up twice from src/utils/
// Separate assets
import mariaIdleImg from "../assets/nivel1/maria_idle.png";
import mariaRunImg from "../assets/nivel1/maria_run.png";
import mariaJumpImg from "../assets/nivel1/maria_jump.png";

import superMariaIdleImg from "../assets/nivel1/super_maria_idle.png";
import superMariaRunImg from "../assets/nivel1/super_maria_run.png";
import superMariaJumpImg from "../assets/nivel1/super_maria_jump.png";

import mariaDeadImg from "../assets/nivel1/maria_dead.png";
import superMariaDeadImg from "../assets/nivel1/super_maria_dead.png";

import enemyIdleImg from "../assets/nivel1/enemy_idle.png";
import enemyRunImg from "../assets/nivel1/enemy_run.png";
import enemyAplastado0Img from "../assets/nivel1/enemy_aplastado_0.png";
import enemyAplastado1Img from "../assets/nivel1/enemy_aplastado_1.png";

import cameliaSheet from "../assets/nivel1/camelia.png";
import cameliaHeridaImg from "../assets/nivel1/camelia_herida.png";
import cameliaPoderImg from "../assets/nivel1/camelia_tirando_poder.png";
import cameliaCloseupImg from "../assets/nivel1/camelia_plano_pecho.png";

import flor0Img from "../assets/nivel1/flor_etapa0.png";
import flor1Img from "../assets/nivel1/flor_etapa1.png";
import flor2Img from "../assets/nivel1/flor_etapa2.png";
import flor3Img from "../assets/nivel1/flor_etapa3.png";
import flor4Img from "../assets/nivel1/flor_etapa4.png";
import flor5Img from "../assets/nivel1/flor_etapa5.png";
// import powerFlowerSheet from "../assets/nivel1/power_flower_spritesheet.png"; // Deleted

import mamaImg from "../assets/nivel1/mama_apicultora.png";
import papaImg from "../assets/nivel1/papa_apicultor.png";
import beeImg from "../assets/nivel1/bee.png";
import snakeImg from "../assets/nivel1/snake.png";
// import enemyImg from "../assets/nivel1/enemy.png"; // Deleted
import beehiveImg from "../assets/nivel1/beehive.png";

import sueloImg from "../assets/nivel1/suelo.png";
import troncoImg from "../assets/nivel1/tronco.png";
import puenteImg from "../assets/nivel1/puente.png";
import cieloImg from "../assets/nivel1/cielo.png";
import cloudImg from "../assets/nivel1/cloud.png";
import bushImg from "../assets/nivel1/bush.png";
import decoracionImg from "../assets/nivel1/arbusto_flores_yuyo.png";
import monticuloImg from "../assets/nivel1/monticulo_tierra.png";
import aguaImg from "../assets/nivel1/agua.png";
// Music (User provided 'music.wav')
import backgroundMusic from "../assets/nivel1/music.wav";

import portalImg from "../assets/nivel1/portal.png";
import cartaTarotImg from "../assets/nivel1/carta_tarot_eleccion_compania.png";
import dialogPaperImg from "../assets/ui/dialog_paper.png"; // Still in src/assets

// Sprout Lands Assets (Legacy for Level 2)
import sproutHouseImg from "../assets/sprites/sprout/house.png";
import chickenCoopImg from "../assets/sprites/sprout/chicken_house.png";
import sproutGrassImg from "../assets/sprites/sprout/grass_tileset.png";
import sproutFenceImg from "../assets/sprites/sprout/fences.png";
import sproutPathImg from "../assets/sprites/sprout/paths.png";
import sproutBridgeImg from "../assets/sprites/sprout/bridge.png";
import ghostNpcImg from "../assets/sprites/sprout/ghost_npc.png";

export function loadAssets(k) {
    // --- Characters ---
    // --- Characters ---
    // Maria Split Sprites
    k.loadSprite("maria_idle", mariaIdleImg, {
        sliceX: 1,
        anims: { idle: { from: 0, to: 0, loop: true } }
    });
    k.loadSprite("maria_run", mariaRunImg, {
        sliceX: 1,
        anims: { run: { from: 0, to: 0, loop: true, speed: 10 } }
    });
    k.loadSprite("maria_jump", mariaJumpImg, {
        sliceX: 1,
        anims: { jump: { from: 0, to: 0, loop: false } }
    });

    // Super Maria (Evo) Split Sprites
    k.loadSprite("super_maria_idle", superMariaIdleImg, {
        sliceX: 1,
        anims: { idle: { from: 0, to: 0, loop: true } }
    });
    k.loadSprite("super_maria_run", superMariaRunImg, {
        sliceX: 1,
        anims: { run: { from: 0, to: 0, loop: true, speed: 10 } }
    });
    k.loadSprite("super_maria_jump", superMariaJumpImg, {
        sliceX: 1,
        anims: { jump: { from: 0, to: 0, loop: false } }
    });

    k.loadSprite("camelia", cameliaSheet, { sliceX: 2, sliceY: 1 });

    k.loadSprite("mama", mamaImg);
    k.loadSprite("papa", papaImg);

    // --- Enemies ---
    // Using new separated enemy assets
    k.loadSprite("enemy_idle", enemyIdleImg, { sliceX: 2, anims: { idle: { from: 0, to: 1, loop: true } } });
    k.loadSprite("enemy_run", enemyRunImg, { sliceX: 2, anims: { run: { from: 0, to: 1, loop: true } } });

    // Squashed states (single frames)
    k.loadSprite("enemy_squash_0", enemyAplastado0Img);
    k.loadSprite("enemy_squash_1", enemyAplastado1Img);

    // Old Bee
    k.loadSprite("bee", beeImg, { sliceX: 1, sliceY: 1 });
    k.loadSprite("snake", snakeImg, { sliceX: 2, sliceY: 1, anims: { crawl: { from: 0, to: 1, loop: true } } });
    k.loadSprite("beehive", beehiveImg);

    // --- Death Sprites ---
    k.loadSprite("maria_dead", mariaDeadImg, { sliceX: 1 }); // Assuming single frame or handle later
    k.loadSprite("super_maria_dead", superMariaDeadImg, { sliceX: 1 });

    // --- Camelia States ---
    k.loadSprite("camelia_herida", cameliaHeridaImg, { sliceX: 2 }); // Guessing 2 frames based on width
    k.loadSprite("camelia_poder", cameliaPoderImg, { sliceX: 2 });
    k.loadSprite("camelia_closeup", cameliaCloseupImg); // Single frame?

    // --- Flowers ---
    k.loadSprite("flor_0", flor0Img);
    k.loadSprite("flor_1", flor1Img);
    k.loadSprite("flor_2", flor2Img);
    k.loadSprite("flor_3", flor3Img);
    k.loadSprite("flor_4", flor4Img);
    k.loadSprite("flor_5", flor5Img);

    // --- Environment & Items ---
    k.loadSprite("suelo", sueloImg);
    k.loadSprite("tronco", troncoImg);
    k.loadSprite("puente", puenteImg);

    k.loadSprite("cielo", cieloImg);
    k.loadSprite("cloud", cloudImg);
    k.loadSprite("bush", bushImg);
    k.loadSprite("decoracion", decoracionImg);
    k.loadSprite("monticulo", monticuloImg);
    k.loadSprite("agua", aguaImg);

    // Using flor_5 (fully grown) as the power flower collectible
    k.loadSprite("power_flower", flor5Img);

    k.loadSprite("portal", portalImg);
    k.loadSprite("carta_tarot", cartaTarotImg);

    // --- UI ---
    k.loadSprite("dialog_box", dialogPaperImg);

    // Audio
    k.loadSound("music", backgroundMusic);

    // Sprout Lands (Stage 2 Legacy)
    k.loadSprite("sprout-house", sproutHouseImg);
    k.loadSprite("chicken-coop", chickenCoopImg);
    k.loadSprite("sprout-grass", sproutGrassImg, { sliceX: 11, sliceY: 11 });
    k.loadSprite("sprout-fence", sproutFenceImg);
    k.loadSprite("sprout-path", sproutPathImg);
    k.loadSprite("sprout-bridge", sproutBridgeImg);
    k.loadSprite("ghost-npc", ghostNpcImg);

    // --- Legacy / Fallback ---
    k.loadSprite("placebo", "../assets/sprites/placebo.png");
}
