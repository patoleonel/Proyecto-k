import { createPlayer } from "../entities/player";
import { setupInput } from "../utils/input";

export function sceneLevel4(k) {
    k.scene("level4", () => {
        k.setGravity(1600);
        let isGamePaused = false;
        const { isLeft, isRight, isJump } = setupInput(k);
        const SPEED = 280; // Slower, more contemplative
        const JUMP_FORCE = 750;

        // ...

        // Movement Logic
        k.onUpdate(() => {
            if (isGamePaused) return;

            // Constrain camera left bound
            if (player.pos.x > k.width() / 2) {
                k.camPos(player.pos.x, k.height() / 2);
            } else {
                k.camPos(k.width() / 2, k.height() / 2);
            }

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
        });
    });
}
