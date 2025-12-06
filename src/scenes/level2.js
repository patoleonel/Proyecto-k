import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel2(k) {
    k.scene("level2", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { inputJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // UI Layer
        k.camScale(1.5); // Zoom in

        // Player (Mica - Evolution!)
        // Note: Using "mica" sprite instead of "maria"
        const player = k.add([
            k.sprite("mica", { height: 80 }), // Only set height to keep aspect ratio
            k.pos(100, k.height() - 200), // Spawning a bit higher
            k.area(),
            k.body(),
            k.anchor("center"),
            "player"
        ]);

        // Companion Logic (Inherited? For now restart logic)
        // TODO: Pass companion state from previous level
        let hasCompanion = false;
        let compEntity = null;

        // Background: "Campo Mixto" - slightly different color or elements
        k.add([
            k.rect(k.width(), k.height()),
            k.pos(0, 0),
            k.fixed(),
            k.color(100, 149, 237), // Cornflower Blue (darker sky)
            k.z(-100)
        ]);

        // Ground (Bottomless pit essentially, but safe start)
        k.add([
            k.rect(400, 48),
            k.pos(0, k.height() - 48),
            k.outline(4),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 100, 100) // Concrete/School floor
        ]);

        // Elevated Platforms
        const platforms = [
            { pos: k.vec2(500, k.height() - 150), width: 200 },
            { pos: k.vec2(800, k.height() - 250), width: 200 },
            { pos: k.vec2(1100, k.height() - 350), width: 200 },
            { pos: k.vec2(1400, k.height() - 450), width: 300 }, // Thor platform
        ];

        platforms.forEach(plat => {
            k.add([
                k.rect(plat.width, 20),
                k.pos(plat.pos),
                k.outline(2),
                k.area(),
                k.body({ isStatic: true }),
                k.color(139, 69, 19) // Wood/Desk color
            ]);
        });

        // Thor Event (The Dog!)
        k.add([
            k.sprite("thor", { height: 60 }), // Keep aspect ratio
            k.pos(1500, k.height() - 510), // On the last platform
            k.area(),
            "thor_npc"
        ]);

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            // Camera Follow
            k.camPos(player.pos);

            // Companion Follow (Lerp for smooth movement)
            if (hasCompanion && compEntity) {
                // Check if companion still exists before lerp
                if (compEntity) { // Removed .exists() to prevent crash
                    compEntity.pos = compEntity.pos.lerp(player.pos.sub(0, 50), 0.1);
                }
            }

            // Left/Right Movement
            if (k.isKeyDown("left") || k.isKeyDown("a")) {
                player.move(-SPEED, 0);
                player.flipX = true;
            }
            if (k.isKeyDown("right") || k.isKeyDown("d")) {
                player.move(SPEED, 0);
                player.flipX = false;
            }

            // Jump
            if (inputJump() && player.isGrounded()) {
                player.jump(JUMP_FORCE);
            }

            // Fall check (Restart level)
            if (player.pos.y > 1000) {
                k.go("level2");
            }
        });

        // Interact with Thor
        player.onCollide("thor_npc", (t) => {
            if (hasCompanion) return; // Prevent double trigger
            k.destroy(t);

            // Show message
            const msg = k.add([
                k.text("¡Thor se unió!", { size: 24 }),
                k.pos(player.pos.sub(0, 100)),
                k.anchor("center"),
                k.color(255, 255, 0),
                k.lifespan(2),
                k.opacity(1) // Required for lifespan to work
            ]);

            // Thor becomes companion
            hasCompanion = true;
            compEntity = k.add([
                k.sprite("thor", { height: 40 }), // Keep aspect ratio
                k.pos(player.pos.sub(40, 40)),
                k.anchor("center"),
                "companion"
            ]);
        });

        // Portal (End of Stage 2)
        k.add([
            k.rect(50, 100),
            k.pos(2000, k.height() - 300), // Floating exit?
            k.color(0, 255, 255), // Cyan
            k.area(),
            k.body({ isStatic: true }),
            "portal"
        ]);

        player.onCollide("portal", () => {
            k.add([
                k.text("¡Etapa 2 Completada!", { size: 48 }),
                k.pos(player.pos), // Center on player
                k.anchor("center"),
                k.color(255, 255, 255), // White Text
                k.z(100)
            ]);
            k.wait(2, () => {
                k.go("level3");
            });
        });
    });
}
