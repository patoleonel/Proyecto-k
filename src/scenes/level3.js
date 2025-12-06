import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel3(k) {
    k.scene("level3", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { isLeft, isRight, isJump } = setupInput(k);
        const SPEED = 320;
        const JUMP_FORCE = 800;

        // ...

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            k.camPos(player.pos);

            if (isLeft()) {
                player.move(-SPEED, 0);
                player.flipX = true;
            }
            if (isRight()) {
                player.move(SPEED, 0);
                player.flipX = false;
            }

            if (isJump() && player.isGrounded()) {
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
