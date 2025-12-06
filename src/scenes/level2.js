import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel2(k) {
    k.scene("level2", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { isLeft, isRight, isJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // ... (UI Layer, Player, etc.)

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            // Camera Follow
            k.camPos(player.pos);

            // Companion Follow
            if (hasCompanion && compEntity) {
                if (compEntity) {
                    compEntity.pos = compEntity.pos.lerp(player.pos.sub(0, 50), 0.1);
                }
            }

            // Left/Right Movement
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
