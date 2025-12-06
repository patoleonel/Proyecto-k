import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel4(k) {
    k.scene("level4", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { inputJump } = setupInput(k);
        const SPEED = 280; // Slower, more contemplative
        const JUMP_FORCE = 750;

        // UI Layer
        k.add([
            k.text("Etapa 4: Vuelta a Casa (25-30 Años)", { size: 32 }),
            k.pos(24, 24),
            k.fixed(),
            k.color(0, 0, 0), // Black text on warm bg
            "ui"
        ]);

        // Background: "Abstract/Cozy" - Warm colors
        k.add([
            k.rect(k.width(), k.height()),
            k.pos(0, 0),
            k.fixed(),
            k.color(255, 228, 196), // Bisque / Warm Peach
            k.z(-100)
        ]);

        // Player (Starts as Roja)
        let player = k.add([
            k.sprite("roja", { height: 80 }),
            k.pos(100, k.height() - 200),
            k.area(),
            k.body(),
            k.anchor("center"),
            "player"
        ]);

        // Ground (Abstract/Soft)
        k.add([
            k.rect(k.width(), 48),
            k.pos(0, k.height() - 48),
            k.outline(4),
            k.area(),
            k.body({ isStatic: true }),
            k.color(255, 160, 122) // Light Salmon
        ]);

        // Evolution Trigger (Mirror/Self-Reflection)
        k.add([
            k.circle(30),
            k.pos(800, k.height() - 200),
            k.color(255, 215, 0), // Gold
            k.outline(4, k.WHITE),
            k.area(),
            k.anchor("center"),
            "evolution_trigger"
        ]);

        // Floating Text for trigger
        k.add([
            k.text("¿Quién eres?", { size: 24 }),
            k.pos(800, k.height() - 250),
            k.anchor("center"),
            k.color(0, 0, 0)
        ]);

        // Evolution Logic
        player.onCollide("evolution_trigger", (t) => {
            k.destroy(t);
            k.shake(5);

            // Visual Effect
            k.add([
                k.rect(k.width(), k.height()),
                k.pos(0, 0),
                k.fixed(),
                k.color(255, 255, 255),
                k.lifespan(0.5),
                k.opacity(1)
            ]);

            // Transform to Keila
            const pos = player.pos;
            k.destroy(player);

            player = k.add([
                k.sprite("keila", { height: 90 }), // Slightly larger, final form
                k.pos(pos),
                k.area(),
                k.body(),
                k.anchor("center"),
                "player"
            ]);

            // Re-bind collision for the ending
            bindEndingCollision();

            k.add([
                k.text("Soy Keila.", { size: 36 }),
                k.pos(pos.x, pos.y - 100),
                k.anchor("center"),
                k.lifespan(3),
                k.color(0, 0, 0),
                k.opacity(1)
            ]);
        });

        // The "Shadow" (Camelia) - The Boss/Ending
        const shadow = k.add([
            k.rect(60, 90), // Placeholder for Shadow/Hooded figure
            k.pos(k.width() - 200, k.height() - 138), // Waiting at the end
            k.color(50, 50, 50),
            k.area(),
            "shadow_boss",
            k.anchor("center")
        ]);

        k.add([
            k.text("Camelia", { size: 24 }),
            k.pos(k.width() - 200, k.height() - 200),
            k.anchor("center"),
            k.color(0, 0, 0)
        ]);

        function bindEndingCollision() {
            player.onCollide("shadow_boss", () => {
                gameEnding();
            });
        }

        // Initial binding if player reaches end as Roja (unlikely but safe)
        bindEndingCollision();

        function gameEnding() {
            isGamePaused = true;

            // Fade out
            k.add([
                k.rect(k.width(), k.height()),
                k.pos(0, 0),
                k.fixed(),
                k.color(255, 255, 255),
                k.opacity(0),
                "fade_out"
            ]).use([
                // Custom simple opacity lerp since we don't need full tween lib here
                {
                    update() {
                        this.opacity += k.dt() * 0.5;
                        if (this.opacity >= 1) {
                            k.go("intro"); // Loop back or show credits scene
                        }
                    }
                }
            ]);

            k.add([
                k.text("¡Feliz Cumpleaños Keila!", { size: 64 }),
                k.pos(k.center()),
                k.anchor("center"),
                k.fixed(),
                k.color(0, 0, 0),
                k.z(1000)
            ]);
        }

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            // Constrain camera left bound
            if (player.pos.x > k.width() / 2) {
                k.camPos(player.pos.x, k.height() / 2);
            } else {
                k.camPos(k.width() / 2, k.height() / 2);
            }

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
        });
    });
}
