import { createPlayer } from "../entities/player.js";

export function sceneLevel2(k) {
    k.scene("level2", () => {
        k.setBackground(200, 230, 255); // Lighter, clearer sky for "Town"

        // --- Physics & Config ---
        k.setGravity(1600);
        const SPEED = 250; // Mica might be slightly faster?
        const JUMP_FORCE = 680;

        // --- Game State ---
        let isGamePaused = false;
        // --- Level Layout ---
        const levelConfig = {
            tileWidth: 32,
            tileHeight: 32,
            pos: k.vec2(0, k.height() - 320), // 10 rows * 32
            tiles: {
                "=": () => [
                    k.sprite("ground"),
                    k.scale(2), // 16x16 -> 32x32
                    k.area(),
                    k.body({ isStatic: true }),
                    "ground"
                ],
                "#": () => [
                    k.sprite("sprout-fence"),
                    k.scale(0.064), // 500px -> 32px
                    k.anchor("bot"),
                    k.area(),
                    k.body({ isStatic: true }),
                    "wall"
                ],
                "-": () => [
                    k.sprite("sprout-path"),
                    k.scale(0.03125), // 1024px -> 32px
                    "path"
                ],
                "+": () => [
                    k.sprite("sprout-bridge"),
                    k.scale(0.064), // 500px -> 32px
                    k.area(),
                    k.body({ isStatic: true }),
                    "platform"
                ],
                "@": () => [
                    k.sprite("sprout-house"),
                    k.scale(0.3), // 500px -> 150px
                    k.anchor("bot"),
                    k.z(-10),
                    "scenery"
                ],
                "&": () => [
                    k.sprite("ghost-npc"),
                    k.scale(0.08), // Adjust to player size
                    k.area(),
                    // k.body({ isStatic: true }), // REMOVED: Prevent physical collision, acts as trigger
                    k.anchor("bot"),
                    "hazard",
                    "ghost"
                ],
                "<": () => [
                    k.rect(50, 100),
                    k.color(0, 255, 255),
                    k.area(),
                    k.body({ isStatic: true }),
                    "portal"
                ]
            }
        };

        const levelLayout = [
            "                                                                                                                                    ",
            "                                                                                                                                    ",
            "     @                   @                           @                     @                           @                            ",
            "                                                                                                                                    ",
            "         &                                     &     &           &                                                                  ",
            "         #-#         #--------#               #-------#         #-------#                      #-------------------#                ",
            "                                                                               ++++                                                 ",
            "               +++                   +++                                                                               <            ",
            "=========== ===  ==================      =====         =========         ==============  ======                     ================",
            "=========== ===                      ++  =====         =========         ==============  ======                     ================"
        ];

        k.addLevel(levelLayout, levelConfig);

        // Debug Floor (Safety Net)
        k.add([
            k.rect(2000, 20),
            k.pos(0, k.height() - 20),
            k.color(255, 0, 0),
            k.area(),
            k.body({ isStatic: true }),
            "debug-floor"
        ]);

        // --- Player (Mica) ---
        const player = k.add([
            k.sprite("mica", { height: 80 }),
            k.pos(100, 0),
            k.area(),
            k.body(),
            k.anchor("center"),
            "player",
            {
                hp: 5,
                isHurt: false // Explicit initialization
            }
        ]);

        // Restore gravity if needed (similar to level 1 fix)
        player.onUpdate(() => {
            if (player.pos.y > 2000) k.go("level2"); // Fall reset
        });

        // --- UI ---
        k.add([
            k.text("Stage 2: Ciudad de Campo", { size: 32 }),
            k.pos(50, 50),
            k.color(0, 0, 0),
            k.fixed()
        ]);

        // Input
        k.onKeyDown("left", () => {
            player.move(-SPEED, 0);
            player.flipX = true;
        });
        k.onKeyDown("right", () => {
            player.move(SPEED, 0);
            player.flipX = false;
        });
        k.onKeyPress("space", () => {
            if (player.isGrounded()) player.jump(JUMP_FORCE);
        });



        // --- Interactions --- //

        // Ghost NPC Logic: "Urban Isolation"
        // They don't attack, but if you get too close, they push you away (rejection).
        player.onCollide("ghost", (g) => {
            if (player.isHurt) return;
            player.isHurt = true;

            // k.shake(5); // DISABLED to debug freeze

            // Push back logic - DISABLED to debug freeze
            // const dir = player.pos.x < g.pos.x ? -1 : 1;
            // player.pos.x += dir * 80; 

            player.color = k.MAGENTA;

            // Optional: Floating text "Invisible..."
            k.add([
                k.text("Invisible...", { size: 16 }),
                k.pos(player.pos.x, player.pos.y - 50),
                k.color(0, 0, 0),
                k.lifespan(1),
                k.move(k.UP, 100)
            ]);

            k.wait(1.5, () => {
                player.isHurt = false;
                player.color = k.WHITE;
            });
        });

        // Portal Logic: End of Level
        player.onCollide("portal", () => {
            k.add([
                k.text("¡Etapa 2 Completada!\n(To Be Continued...)", { size: 48, align: "center" }),
                k.pos(k.center()),
                k.anchor("center"),
                k.color(0, 0, 0)
            ]);
            player.paused = true; // Stop player
            // Here we would go("level3") in the future
        });

    });
}
