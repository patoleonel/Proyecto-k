import mariaImg from "../assets/sprites/maria_v2.png";

import dialogPaperImg from "../assets/ui/dialog_paper.png";

// Legacy Assets (kept for now)
import abejaImg from "../../fotos/Abeja/abeja.png";
import mamaImg from "../../fotos/Mama/Mama.png";
import papaImg from "../../fotos/Papa/papa.png";
import hermanaImg from "../../fotos/Hermana/Hermana.png";
import micaImg from "../../fotos/Mica/mica.png";
import thorImg from "../../fotos/thor/Thor.png";
import entropiaImg from "../../fotos/srta entropia/srta entropia.png";
import rojaImg from "../../fotos/Roja/roja.png";
import keilaImg from "../../fotos/Keila/Keila.png";

// Scenery Assets
import shedImg from "../assets/backgrounds/shed.png";
import beehiveImg from "../assets/backgrounds/beehive.png";
import cloudImg from "../assets/backgrounds/cloud.png";
import bushImg from "../assets/backgrounds/bush.png";

// Mario Assets
import brickImg from "../assets/sprites/mario/brick.png";
import blockImg from "../assets/sprites/mario/block.png";
import coinImg from "../assets/sprites/mario/coin.png";
import mushroomImg from "../assets/sprites/mario/mushroom.png";
import surpriseImg from "../assets/sprites/mario/surprise.png";
import unboxedImg from "../assets/sprites/mario/unboxed.png";
import pipeTLImg from "../assets/sprites/mario/pipe-top-left.png";
import pipeTRImg from "../assets/sprites/mario/pipe-top-right.png";
import pipeBLImg from "../assets/sprites/mario/pipe-bottom-left.png";
import pipeBRImg from "../assets/sprites/mario/pipe-bottom-right.png";
import evilShroomImg from "../assets/sprites/mario/evil-shroom.png";
import groundImg from "../assets/sprites/mario/ground.png";

// Sprout Lands Assets
import sproutHouseImg from "../assets/sprites/sprout/house.png";
import chickenCoopImg from "../assets/sprites/sprout/chicken_house.png";
import sproutGrassImg from "../assets/sprites/sprout/grass_tileset.png";
import sproutFenceImg from "../assets/sprites/sprout/fences.png";
import sproutPathImg from "../assets/sprites/sprout/paths.png";
import sproutBridgeImg from "../assets/sprites/sprout/bridge.png";
import ghostNpcImg from "../assets/sprites/sprout/ghost_npc.png";

export function loadAssets(k) {
    // Stage 1 Upgraded Assets
    k.loadSprite("maria", mariaImg);

    // Sprout Lands (Stage 2)
    k.loadSprite("sprout-house", sproutHouseImg);
    k.loadSprite("chicken-coop", chickenCoopImg);
    k.loadSprite("sprout-grass", sproutGrassImg, { sliceX: 11, sliceY: 11 }); // Standard
    k.loadSprite("sprout-fence", sproutFenceImg);
    k.loadSprite("sprout-path", sproutPathImg);
    k.loadSprite("sprout-bridge", sproutBridgeImg);
    k.loadSprite("ghost-npc", ghostNpcImg);

    k.loadSprite("dialog_box", dialogPaperImg);
    k.loadSprite("placebo", "../assets/sprites/placebo.png");

    // Scenery (Legacy/Placeholder)
    k.loadSprite("shed", shedImg);
    k.loadSprite("beehive", beehiveImg);
    k.loadSprite("cloud", cloudImg);
    k.loadSprite("bush", bushImg);



    k.loadSprite("tileset", "../assets/sprites/generic_platformer_tiles.png", {
        sliceX: 12,
        sliceY: 8, // Estimated grid, will verify visually
    });

    // Mario Assets
    k.loadSprite("brick", brickImg);
    k.loadSprite("block", blockImg);
    k.loadSprite("ground", groundImg);
    k.loadSprite("coin", coinImg);
    k.loadSprite("mushroom", mushroomImg);
    k.loadSprite("surprise", surpriseImg);
    k.loadSprite("unboxed", unboxedImg);
    k.loadSprite("pipe-tl", pipeTLImg);
    k.loadSprite("pipe-tr", pipeTRImg);
    k.loadSprite("pipe-bl", pipeBLImg);
    k.loadSprite("pipe-br", pipeBRImg);
    k.loadSprite("evil-shroom", evilShroomImg);

    // Legacy Assets
    k.loadSprite("abeja", abejaImg);
    k.loadSprite("mama", mamaImg);
    k.loadSprite("papa", papaImg);
    k.loadSprite("hermana", hermanaImg);
    k.loadSprite("mica", micaImg);
    k.loadSprite("thor", thorImg);
    k.loadSprite("entropia", entropiaImg);
    k.loadSprite("roja", rojaImg);
    k.loadSprite("keila", keilaImg);
}
