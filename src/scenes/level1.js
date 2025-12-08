import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";
import { createHealthUI } from "../ui/health";
import { startDialog } from "../ui/dialog";

export function sceneLevel1(k) {
    k.scene("level1", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        let isDialogActive = true;
        let isPlayerEvolved = false;

        // --- AUDIO ---
        // Play music with loop
        try {
            music = k.play("music", {
                volume: 0.5,
                loop: true
            });
        } catch (e) {
            console.error("Music not found or failed to play", e);
        }

        // --- BACKGROUND ---
        // User wants sky visible but also ground visible.
        // Sky scaled down slightly to fit better or up? "Cielo gigante" -> Make smaller?
        // Or "Cielo tiene mas para dar en la parte inferior" -> Shift up?
        k.add([
            k.sprite("cielo"),
            k.pos(0, -200), // Shift up to show bottom part
            k.fixed(),
            k.scale(k.width() / 640),
            k.z(-1000)
        ]);

        // --- DECORATION (Clouds) ---
        for (let i = 0; i < 8; i++) {
            k.add([
                k.sprite("cloud"),
                k.pos(k.rand(0, 5000), k.rand(50, 400)),
                k.scale(k.rand(0.3, 0.6)), // Larger clouds
                k.z(-100),
                k.move(k.rand(15, 40), 0),
                "cloud"
            ]);
        }

        // --- UI ---
        k.add([
            k.text("Nivel 1: Infancia - El Campo", { size: 32, font: "monospace" }),
            k.pos(24, 24),
            k.fixed(),
            k.color(0, 0, 0),
            "ui"
        ]);

        const healthUI = createHealthUI(k);

        // Player instance
        // Scale 0.45 - 0.5 (Much bigger)
        const player = createPlayer(k, k.vec2(100, k.height() - 400));
        player.use(k.scale(0.15));

        // --- LEVEL LAYOUT ---
        // Map Char -> Component
        const mapConfig = {
            tileWidth: 64,  // Using 64px grid for larger feel
            tileHeight: 64,
            pos: k.vec2(0, k.height() - 320),
            tiles: {
                "=": () => [
                    k.sprite("suelo"),
                    k.scale(0.55), // Big Ground
                    k.area(),
                    k.body({ isStatic: true }),
                    "ground"
                ],
                "-": () => [ // Floating Log Platform
                    k.sprite("tronco"),
                    k.scale(0.5),
                    k.area(),
                    k.body({ isStatic: true }),
                    "platform"
                ],
                "~": () => [ // Water
                    k.sprite("agua"),
                    k.scale(0.55),
                    k.area(),
                    k.z(-10),
                    "water",
                    "hazard"
                ],
                "+": () => [ // Bridge
                    k.sprite("puente"),
                    k.scale(0.5),
                    k.area(),
                    k.body({ isStatic: true }),
                    "platform"
                ],
                "F": () => [
                    k.sprite("power_flower"), // removed anim: idle
                    k.scale(0.25), // Bigger flower
                    k.area(),
                    k.anchor("bot"),
                    "power_flower",
                    {
                        lifeTimer: 0,
                        totalLife: 15.0,
                        isDead: false,
                        update() {
                            if (this.isDead || isDialogActive) return;
                            this.lifeTimer += k.dt();
                            if (this.lifeTimer > this.totalLife * 0.75) {
                                // this.play("wither"); // Disabled
                                this.color = k.RED; // Visual feedback instead
                            }
                            if (this.lifeTimer >= this.totalLife) {
                                this.isDead = true;
                                // this.play("dead"); // Disabled
                                this.color = k.BLACK; // Visual feedback
                            }
                        }
                    }
                ],
                "B": () => [
                    k.sprite("enemy_run", { anim: "run" }),
                    k.scale(0.15), // Scale to match player?
                    k.area(),
                    k.body({ isStatic: false }), // Gravity?
                    k.move(k.vec2(-100, 0), 0), // Moves left
                    k.offscreen({ destroy: true }),
                    "enemy",
                    "hazard"
                ],
                "P": () => [
                    k.sprite("portal"),
                    k.scale(0.25), // Bigger Portal
                    k.area(),
                    k.anchor("bot"),
                    "portal"
                ]
            }
        };

        // Layout Concept:
        // Start -> Gaps -> Water with Bridge -> Floating Logs -> Flower on Log -> More Water -> Portal
        // Note: Using multiple strings for layers if needed, or careful char placement.
        // We will do a single layer for physics/ground to keep it simple, changing Y pos via string rows?
        // Kaplay map parser supports 2D array of strings.

        const layout = [
            "                                                                                                                  ",
            "                                                                                                                  ",
            "         B                                  B                                              B                      ",
            "                                                                                                                  ",
            "                                                                                                                  ",
            "                      ----   F                           ----                                                     ",
            "                                                                                                     P            ",
            "                +++        ~~~~~~      +++                                                                        ",
            "======      =======        ~~~~~~      =======     ~~~~~~      ===========    ==========    ===================",
            "======      =======        ~~~~~~      =======     ~~~~~~      ===========    ==========    ==================="
            // The water (~) is physically there.
            // Problem: If player falls into ~, they sink.
            // Bridge (+) is above ~.
        ];

        k.addLevel(layout, mapConfig);

        // Decoration: Bushes
        for (let x = 0; x < 4000; x += 400) {
            if (Math.random() > 0.4) {
                // Randomize Y slightly or just place on a known ground level? 
                // It's hard with tiles. We'll just place them generically.
                k.add([
                    k.sprite("bush"),
                    k.pos(x, k.height() - 150),
                    k.anchor("bot"),
                    k.scale(0.25),
                    k.z(-50)
                ]);
            }
        }

        // --- INPUT & MOVEMENT ---
        const { isLeft, isRight, isJump, isFire } = setupInput(k);
        const SPEED = 350; // Faster for bigger map

        // Initial Dialog
        k.wait(0.5, () => {
            startDialog(k, [
                "Bienvenida, Micaela.",
                "Evoluciona con la Flor y cruza el puente.",
            ], () => {
                isGamePaused = false;
                isDialogActive = false;
            });
        });

        // Shooting Logic
        k.onKeyPress("z", () => {
            if (isDialogActive) return;
            if (isPlayerEvolved) {
                shootBee();
            }
        });

        function shootBee() {
            const dir = player.flipX ? -1 : 1;
            k.add([
                k.sprite("bee"),
                k.pos(player.pos.add(0, -40)),
                k.scale(0.08),
                k.area(),
                k.move(dir * 700, 0),
                k.lifespan(2),
                "projectile"
            ]);
            k.shake(2);
        }

        k.onUpdate(() => {
            if (isDialogActive) return;

            // Camera follows Player Y somewhat to handle verticality
            // But clamp it so we don't see too much below ground
            const camY = Math.max(player.pos.y - 100, k.height() / 2);
            k.camPos(player.pos.x + 300, camY);

            // Movement
            // Movement
            const currentPrefix = isPlayerEvolved ? "super_maria" : "maria";

            if (isLeft()) {
                player.move(-SPEED, 0);
                if (player.isGrounded() && player.curAnim() !== "run") {
                    player.use(k.sprite(`${currentPrefix}_run`));
                    player.play("run");
                }
                player.flipX = true; // Apply flip AFTER potential sprite swap
            } else if (isRight()) {
                player.move(SPEED, 0);
                if (player.isGrounded() && player.curAnim() !== "run") {
                    player.use(k.sprite(`${currentPrefix}_run`));
                    player.play("run");
                }
                player.flipX = false; // Apply flip AFTER potential sprite swap
            } else {
                if (player.isGrounded() && player.curAnim() !== "idle") {
                    player.use(k.sprite(`${currentPrefix}_idle`));
                    player.play("idle");
                }
                // Maintain previous flipX or set based on last direction? 
                // Usually idle keeps last direction. Kaplay doesn't auto-reset on .use() unless completely new component.
                // But since we just swapped component, we should re-apply if we tracked it.
                // But 'player' entity stores flipX?
                // Actually, component 'sprite' has flipX.
                // If we don't set it here, it defaults to false (Right).
                // We need to track 'lastFacing' or similar if we want Idle to persist direction.
                // For now, let's just let it face Right (false) or keep logic simple.
                // Re-setting player.flipX = player.flipX might work if 'player' wrapper property reads from component?
                // player.flipX is a proxy setter.
            }

            if (isJump() && player.isGrounded()) {
                player.jump(750);
                player.use(k.sprite(`${currentPrefix}_jump`));
                player.play("jump");
                // Restore flip?
                if (k.isKeyDown("left")) player.flipX = true;
            }

            // Fall Death / Water Death
            if (player.pos.y > k.height() + 200) {
                k.go("level1");
            }

            // Check Death State for sprite swap
            if (player.hp <= 0 && player.curAnim() !== "dead") {
                const prefix = isPlayerEvolved ? "super_maria" : "maria";
                player.use(k.sprite(`${prefix}_dead`));
                // If dead sprite has animation, play it. If single frame, just ensure it loops or stays.
                // Our loader said sliceX: 1, so no anim "dead".
            }

            healthUI.update(player.hp);
        });

        // --- INTERACTIONS ---

        player.onCollide("power_flower", (f) => {
            if (f.isDead) {
                k.add([
                    k.text("Se marchitó...", { size: 24 }),
                    k.pos(f.pos.sub(0, 60)),
                    k.lifespan(1),
                    k.color(255, 0, 0)
                ]);
                return;
            }

            k.destroy(f);
            k.shake(10);
            isPlayerEvolved = true;
            player.use(k.sprite("super_maria_idle"));
            player.play("idle");

            startDialog(k, [
                "¡Has evolucionado!",
                "Tecla Z para disparar."
            ], () => {
                isDialogActive = false;
                k.add([
                    k.sprite("mama"),
                    k.pos(player.pos.add(60, -60)),
                    k.scale(0.25),
                    "parent"
                ]);
            });
        });

        player.onCollide("hazard", (e) => {
            // Water handling
            if (e.is("water")) {
                // Sinking effect?
                // Physics usually handles falling through if not static input
                // But we want instant death or respawn
                player.color = k.RED;
                k.wait(0.2, () => k.go("level1"));
            } else {
                player.hurt(1);
                k.shake(5);
                k.destroy(e);
            }
        });

        k.onCollide("projectile", "enemy", (p, e) => {
            k.destroy(p);
            k.destroy(e);
        });

        player.onCollide("portal", () => {
            k.go("level2");
        });
    });
}
