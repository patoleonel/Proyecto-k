import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";
import { createHealthUI } from "../ui/health";
import { startDialog } from "../ui/dialog";

export function sceneLevel1(k) {
    k.scene("level1", () => {
        k.setGravity(0);
        let isGamePaused = false;
        let isDialogActive = true;

        // Intro Narrative
        isGamePaused = true;
        startDialog(k, [
            "Bienvenida a la existencia.",
            "Todo es extraño y nuevo aqui.",
            "Camina hacia la derecha para crecer."
        ], () => {
            isGamePaused = false;
            isDialogActive = false;
            k.setGravity(1600);
        });

        // Input Setup
        const { isLeft, isRight, isJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // Background
        k.setBackground(135, 206, 235);

        // 2. Distant Scenery (Clouds, Bushes)
        for (let i = 0; i < 20; i++) {
            // Clouds (Moving)
            k.add([
                k.sprite("cloud"),
                k.pos(k.rand(-500, 5000), k.rand(0, 300)),
                k.scale(0.15),
                k.z(-100),
                k.move(20, 0), // Slow drift to the right
                "cloud"
            ]);

            // Bushes (Static but aligned)
            if (i % 2 === 0) {
                k.add([
                    k.sprite("bush"),
                    k.pos(i * 400 + k.rand(-50, 50), k.height() - 40), // Ground level exactly (Row 8 starts at height-40)
                    k.anchor("bot"),
                    k.scale(0.08),
                    k.z(-80),
                ]);
            }
        }

        // 3. Featured Structures (Galpon, Beehives)
        // Shed
        k.add([
            k.sprite("shed"),
            k.pos(600, k.height() - 40), // Aligned to floor
            k.anchor("bot"),
            k.scale(0.3),
            k.z(-90)
        ]);

        // Beehives
        k.add([
            k.sprite("beehive"),
            k.pos(300, k.height() - 40),
            k.anchor("bot"),
            k.scale(0.1),
            k.z(-89)
        ]);

        k.add([
            k.sprite("beehive"),
            k.pos(450, k.height() - 40),
            k.anchor("bot"),
            k.scale(0.1),
            k.z(-89)
        ]);

        // UI Layer
        k.add([
            k.text("Stage 1: Campestre", { size: 32 }),
            k.pos(24, 24),
            k.fixed(),
            k.color(0, 0, 0),
            "ui"
        ]);

        // Health UI
        const healthUI = createHealthUI(k);

        // Player (Maria Micaela - New Sprite)
        // Note: The sprite is now loaded as "maria", so createPlayer should arguably pick that up if it uses the string "maria".
        // Let's verify player.js uses "maria" or pass it explicitly.
        const player = createPlayer(k, k.vec2(100, k.height() - 90)); // Checks player.js next to ensure it uses sprite() logic.

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

        const mapHeight = 10 * 20; // 10 rows * 20px
        const levelConfig = {
            tileWidth: 20,
            tileHeight: 20,
            pos: k.vec2(0, k.height() - mapHeight), // Align to bottom
            tiles: {
                "=": () => [
                    k.sprite("ground"), // Use new ground sprite
                    k.area(),
                    k.body({ isStatic: true }),
                    "ground"
                ],
                "-": () => [
                    k.sprite("brick"),
                    k.area(),
                    k.body({ isStatic: true }),
                    "platform"
                ],
                "$": () => [
                    k.sprite("coin"),
                    k.area(),
                    "coin"
                ],
                "%": () => [
                    k.sprite("surprise"),
                    k.area(),
                    k.body({ isStatic: true }),
                    "coin-surprise"
                ],
                "^": () => [
                    k.sprite("evil-shroom"),
                    k.area(),
                    k.body(),
                    k.anchor("bot"),
                    "hazard",
                    "enemy",
                    {
                        dir: -1,
                        update() {
                            this.move(this.dir * 40, 0); // Walk left/right
                        }
                    }
                ],
                "*": () => [
                    k.sprite("surprise"),
                    k.area(),
                    k.body({ isStatic: true }),
                    "mushroom-surprise"
                ],
                "}": () => [
                    k.sprite("unboxed"),
                    k.area(),
                    k.body({ isStatic: true }),
                    "unboxed"
                ],
                "(": () => [
                    k.sprite("pipe-bl"),
                    k.area(),
                    k.body({ isStatic: true }),
                    k.scale(0.5), // Pipes are big
                    "pipe"
                ],
                ")": () => [
                    k.sprite("pipe-br"),
                    k.area(),
                    k.body({ isStatic: true }),
                    k.scale(0.5),
                    "pipe"
                ],
                "[": () => [
                    k.sprite("pipe-tl"),
                    k.area(),
                    k.body({ isStatic: true }),
                    k.scale(0.5),
                    "pipe"
                ],
                "]": () => [
                    k.sprite("pipe-tr"),
                    k.area(),
                    k.body({ isStatic: true }),
                    k.scale(0.5),
                    "pipe"
                ],
            }
        };

        const levelLayout = [
            "                                                                    ",
            "                                                                    ",
            "                                                                    ",
            "                                                                    ",
            "                      ----                                          ",
            "                                   ----                             ",
            "           ----            %       ^             []                 ",
            "                        ^                        ()                 ",
            "====================================================================",
            "====================================================================",
        ];

        k.addLevel(levelLayout, levelConfig);

        // Obstacle removed as per user request to clean up visuals

        // Portal (Level End)
        k.add([
            k.rect(50, 100),
            k.pos(1250, k.height() - 148), // On ground, inside map bounds
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
                if (compEntity) {
                    compEntity.pos = compEntity.pos.lerp(player.pos.sub(0, 50), 0.1);
                }
            }

            // Left/Right Movement: BLOCKED by Dialog
            if (!isDialogActive) {
                if (isLeft()) {
                    player.move(-SPEED, 0);
                    player.flipX = true;
                }
                if (isRight()) {
                    player.move(SPEED, 0);
                    player.flipX = false;
                }

                // Jump
                if (isJump() && player.isGrounded()) {
                    player.jump(JUMP_FORCE);
                }
            }

            // Fall check (Reset if falls off world)
            if (player.pos.y > 1000) {
                k.go("level1");
            }

            // Update Health UI
            if (player.exists()) {
                healthUI.update(player.hp);
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
                k.text("Elige tu Compañía\n(Flechas y ESPACIO)", { size: 32, align: "center" }),
                k.pos(k.width() / 2, 80),
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

            let selectedIndex = 0;
            const buttons = [];

            companions.forEach((comp, index) => {
                const yPos = 200 + (index * 80);

                // Button Background
                const btn = k.add([
                    k.rect(300, 60),
                    k.pos(k.width() / 2, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    k.color(0, 0, 0), // Default black
                    k.outline(4, k.WHITE),
                    k.area(),
                    "ui_overlay",
                    "btn"
                ]);

                // Text
                k.add([
                    k.text(comp.name, { size: 24 }),
                    k.pos(k.width() / 2, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    k.color(255, 255, 255),
                    "ui_overlay"
                ]);

                // Icon
                k.add([
                    k.sprite(comp.sprite, { height: 40 }), // Maintain aspect ratio
                    k.pos(k.width() / 2 - 120, yPos),
                    k.anchor("center"),
                    k.fixed(),
                    "ui_overlay"
                ]);

                buttons.push(btn);

                // Mouse Click Handler (Keep hybrid support)
                btn.onClick(() => selectCompanion(index));
            });

            // Highlight Logic
            function updateHighlight() {
                buttons.forEach((btn, idx) => {
                    if (idx === selectedIndex) {
                        btn.color = k.rgb(100, 100, 255); // Highlight Blue
                    } else {
                        btn.color = k.rgb(0, 0, 0); // Default
                    }
                });
            }
            updateHighlight();

            // Keyboard Handlers (Bound to this scope/state)
            const downHandler = k.onKeyPress("down", () => {
                selectedIndex = (selectedIndex + 1) % companions.length;
                updateHighlight();
            });
            const upHandler = k.onKeyPress("up", () => {
                selectedIndex = (selectedIndex - 1 + companions.length) % companions.length;
                updateHighlight();
            });
            const confirmHandler = k.onKeyPress("space", () => {
                selectCompanion(selectedIndex);
            });

            function selectCompanion(index) {
                // Cleanup handlers to avoid leaks
                downHandler.cancel();
                upHandler.cancel();
                confirmHandler.cancel();

                // Spawn Companion
                hasCompanion = true;
                const comp = companions[index];

                compEntity = k.add([
                    k.sprite(comp.sprite, { height: 30 }), // Aspect ratio fix
                    k.pos(player.pos.sub(40, 40)),
                    k.anchor("center"),
                    k.anchor("center"),
                    "companion"
                ]);

                // Visual Shield
                player.add([
                    k.circle(50), // Radius covering player
                    k.color(0, 255, 255),
                    k.opacity(0.2),
                    k.anchor("center"),
                    "shield_visual"
                ]);

                // Resume Game
                k.destroyAll("ui_overlay");
                isGamePaused = false;
            }
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
                    k.go("level1");
                });
            }
        });

        // Test Hazard "Honguito Malo"
        // Toxic Placebo (Honguito Malo)
        k.add([
            k.sprite("placebo", { height: 40 }),
            k.pos(600, k.height() - 100),
            k.area(),
            k.anchor("center"),
            // Animate floating effect
            {
                update() {
                    this.pos.y += Math.sin(k.time() * 4) * 0.5;
                }
            },
            "hazard"
        ]);

        player.onCollide("hazard", (h) => {
            if (hasCompanion) {
                // Companion sacrifices itself to protect Keila
                // Give player invulnerability so they can escape the hazard
                player.makeInvulnerable(2);

                // Pushback to ensure they leave trigger area
                if (player.pos.x < h.pos.x) {
                    player.move(-1500, -500); // Stronger pushback
                } else {
                    player.move(1500, -500);
                }

                k.shake(10);
                k.destroy(compEntity);

                // Remove visual shield
                const shield = player.get("shield_visual")[0];
                if (shield) k.destroy(shield);

                hasCompanion = false;
                compEntity = null;

                k.add([
                    k.text("¡Compañía Sacrificada!", { size: 24 }),
                    k.pos(player.pos.sub(0, 50)),
                    k.anchor("center"),
                    k.color(255, 0, 0),
                    k.lifespan(1),
                    k.opacity(1)
                ]);
            } else {
                player.hurt(1);
                k.destroy(h); // Destroy the placebo so it disappears
                // Pushback
                if (player.pos.x < h.pos.x) {
                    player.move(-1000, -400);
                } else {
                    player.move(1000, -400);
                }
            }
        });

        // Portal Logic
        let levelComplete = false;
        player.onCollide("portal", () => {
            if (levelComplete) return;
            levelComplete = true;

            k.add([
                k.text("¡Etapa 1 Completada!", { size: 48 }),
                k.pos(k.center()),
                k.anchor("center"),
                k.color(255, 255, 255), // White Text Fix
                k.fixed()
            ]);
            k.wait(2, () => {
                k.go("level2");
            });
        });
    });
}
