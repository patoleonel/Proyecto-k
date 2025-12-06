import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel3(k) {
    k.scene("level3", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { inputJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // UI Layer
        k.add([
            k.text("Etapa 3: Ciudad (20-25 Años)", { size: 32 }),
            k.pos(24, 24),
            k.fixed(),
            k.color(255, 255, 255), // White text for dark bg
            "ui"
        ]);

        // Background: "Ciudad" - Night/Dark
        k.add([
            k.rect(k.width(), k.height()),
            k.pos(0, 0),
            k.fixed(),
            k.color(20, 20, 50), // Dark Navy Blue
            k.z(-100)
        ]);

        // Player (Srta. Entropía)
        const player = k.add([
            k.sprite("entropia", { height: 80 }), // Aspect Ratio Fix
            k.pos(100, k.height() - 200),
            k.area(),
            k.body(),
            k.anchor("center"),
            "player"
        ]);

        // Platforms (City Buildings/Concrete)
        const platforms = [
            { pos: k.vec2(0, k.height() - 48), width: 400, color: [50, 50, 50] }, // Start ground
            { pos: k.vec2(500, k.height() - 200), width: 150, color: [80, 80, 80] },
            { pos: k.vec2(750, k.height() - 350), width: 150, color: [80, 80, 80] },
            { pos: k.vec2(1000, k.height() - 250), width: 150, color: [80, 80, 80] }, // Adjusted for easier jump
            { pos: k.vec2(1300, k.height() - 400), width: 300, color: [50, 50, 50] }, // End ground (Target)
        ];

        platforms.forEach(plat => {
            k.add([
                k.rect(plat.width, 40),
                k.pos(plat.pos),
                k.outline(2),
                k.area(),
                k.body({ isStatic: true }),
                k.color(...plat.color)
            ]);
        });

        // "Traitor" Companion Event (Placeholder Logic)
        k.add([
            k.circle(20),
            k.pos(800, k.height() - 400),
            k.color(255, 0, 0), // Red = Dangerous
            k.area(),
            "harmful_entity" // Sensor only
        ]);

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            k.camPos(player.pos);

            if (k.isKeyDown("left") || k.isKeyDown("a")) {
                player.move(-SPEED, 0);
                player.flipX = true;
            }
            if (k.isKeyDown("right") || k.isKeyDown("d")) {
                player.move(SPEED, 0);
                player.flipX = false;
            }

            if (inputJump() && player.isGrounded()) {
                player.jump(JUMP_FORCE);
            }

            if (player.pos.y > 1000) {
                k.go("level3");
            }
        });

        // Harmful Interaction
        player.onCollide("harmful_entity", (h) => {
            k.destroy(h);
            k.shake(20);

            // Visual Feedback
            k.add([
                k.text("¡Cuidado!", { size: 24 }),
                k.pos(player.pos.sub(0, 50)),
                k.anchor("center"),
                k.color(255, 0, 0),
                k.lifespan(1),
                k.opacity(1)
            ]);

            // Simple Knockback
            if (player.isGrounded()) {
                player.jump(500);
            }
        });

        // Portal (End of Stage 3)
        k.add([
            k.rect(50, 100),
            k.pos(1500, k.height() - 500),
            k.color(0, 255, 255),
            k.area(),
            k.body({ isStatic: true }),
            "portal"
        ]);

        player.onCollide("portal", () => {
            k.add([
                k.text("¡Etapa 3 Completada!", { size: 48 }),
                k.pos(player.pos),
                k.anchor("center"),
                k.color(255, 255, 255),
                k.z(100)
            ]);
            k.wait(2, () => {
                k.go("level4");
            });
        });
    });
}
