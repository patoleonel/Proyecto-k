import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel1(k) {
    k.scene("game", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { inputJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // UI Layer (Fixed)
        k.add([
            k.text("Stage 1: Campestre", { size: 32 }),
            k.pos(24, 24),
            k.fixed(),
            k.color(0, 0, 0),
            "ui"
        ]);

        // Player (Maria Micaela)
        const player = createPlayer(k, k.vec2(100, 100));

        // Companion Logic
        let hasCompanion = false;
        let compEntity = null;

        // Tarot Card (Event Trigger)
        k.add([
            k.rect(40, 60),
            k.pos(300, k.height() - 150),
            k.color(138, 43, 226), // Blue Violet
            k.outline(2, k.WHITE),
            k.area(),
            k.body({ isStatic: true }),
            "tarot",
            { isCard: true }
        ]);

        // Ground (Long platform)
        k.add([
            k.rect(2000, 48),
            k.pos(0, k.height() - 48),
            k.outline(4),
            k.area(),
            k.body({ isStatic: true }),
            k.color(34, 139, 34) // Forest Green
        ]);

        // Platform 1
        k.add([
            k.rect(200, 20),
            k.pos(400, k.height() - 150),
            k.outline(2),
            k.area(),
            k.body({ isStatic: true }),
            k.color(139, 69, 19) // Saddle Brown
        ]);

        // Platform 2
        k.add([
            k.rect(200, 20),
            k.pos(700, k.height() - 250),
            k.outline(2),
            k.area(),
            k.body({ isStatic: true }),
            k.color(139, 69, 19)
        ]);

        // Obstacle (Spike)
        k.add([
            k.polygon([k.vec2(0, 30), k.vec2(15, 0), k.vec2(30, 30)]),
            k.pos(600, k.height() - 78), // On ground
            k.color(0, 0, 0),
            k.area(),
            k.body({ isStatic: true }),
            "obstacle"
        ]);

        // Portal (Level End)
        k.add([
            k.rect(50, 100),
            k.pos(1900, k.height() - 148), // On ground
            k.color(0, 255, 255), // Cyan
            k.area(),
            k.body({ isStatic: true }),
            "portal"
        ]);

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            // Camera Follow
            k.camPos(player.pos);

            // Companion Follow (Lerp for smooth movement)
            if (hasCompanion && compEntity) {
                compEntity.pos = compEntity.pos.lerp(player.pos.sub(0, 50), 0.1);
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

            // Fall check (Reset if falls off world)
            if (player.pos.y > 1000) {
                k.go("game");
            }
        });

        // Tarot Event Logic
        player.onCollide("tarot", (t) => {
            k.destroy(t);
            isGamePaused = true;
            showTarotSelection();
        });

        function showTarotSelection() {
            // Overlay
            k.add([
                k.rect(k.width(), k.height()),
                k.pos(0, 0),
                k.fixed(),
                k.color(0, 0, 0),
                k.opacity(0.8),
                "ui_overlay"
            ]);

            k.add([
                k.text("Elige tu Compañía", { size: 32 }),
                k.pos(k.width() / 2, 100),
                k.anchor("center"),
                k.fixed(),
                k.color(255, 255, 255),
                "ui_overlay"
            ]);

            const companions = [
                { name: "Abeja", sprite: "abeja" },
                { name: "Madre", sprite: "mama" },
                { name: "Padre", sprite: "papa" },
                { name: "Hermana", sprite: "hermana" }
            ];

            companions.forEach((comp, index) => {
                const yPos = 200 + (index * 80);

                // Button
                const btn = k.add([
                    k.rect(300, 60),
                    k.pos(k.width() / 2, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    k.color(255, 255, 255),
                    k.outline(4, k.BLACK),
                    k.area(),
                    "ui_overlay",
                    "btn" // Tag for interaction
                ]);

                // Text
                k.add([
                    k.text(comp.name, { size: 24 }),
                    k.pos(k.width() / 2, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    k.color(0, 0, 0),
                    "ui_overlay"
                ]);

                // Icon
                k.add([
                    k.sprite(comp.sprite, { width: 40, height: 40 }),
                    k.pos(k.width() / 2 - 120, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    "ui_overlay"
                ]);

                // Click Handler
                btn.onClick(() => {
                    // Spawn Companion
                    hasCompanion = true;
                    compEntity = k.add([
                        k.sprite(comp.sprite, { width: 30, height: 30 }),
                        k.pos(player.pos.sub(40, 40)),
                        k.anchor("center"),
                        "companion"
                    ]);

                    // Resume Game
                    k.destroyAll("ui_overlay");
                    isGamePaused = false;
                });
            });
        }

        // Collision Logic
        player.onCollide("obstacle", (obs) => {
            if (hasCompanion) {
                k.shake(10);
                k.destroy(compEntity);
                hasCompanion = false;
                compEntity = null;
                k.destroy(obs);
            } else {
                k.shake(20);
                k.wait(0.5, () => {
                    k.go("game");
                });
            }
        });

        // Portal Logic
        player.onCollide("portal", () => {
            k.add([
                k.text("¡Etapa 1 Completada!", { size: 48 }),
                k.pos(k.center()),
                k.anchor("center"),
                k.color(0, 0, 0),
                k.fixed()
            ]);
            k.wait(2, () => {
                k.go("intro");
            });
        });
    });
}
