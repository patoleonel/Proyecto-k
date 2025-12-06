import { setupInput } from "../utils/input";

export function sceneIntro(k) {
    k.scene("intro", () => {
        k.setBackground(0, 0, 0); // Black void

        // Phase 1: The Truth
        const title = k.add([
            k.text("La vida es caótica...", { size: 32 }),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255),
            k.opacity(0),
            { fadeTime: 2 } // Custom state for fading
        ]);

        // Simple fade in effect
        title.onUpdate(() => {
            if (title.opacity < 1) {
                title.opacity += k.dt();
            }
        });

        // Phase 2: The Choice triggers after a delay
        k.wait(3, () => {
            title.text = "La vida es caótica.\n\n¿Deseas Nacer?";

            const yesBtn = k.add([
                k.text("[ S ] SÍ", { size: 24 }),
                k.pos(k.center().add(0, 100)),
                k.anchor("center"),
                k.color(0, 255, 0),
                k.area(),
                "btn"
            ]);

            const noBtn = k.add([
                k.text("[ N ] NO", { size: 24 }),
                k.pos(k.center().add(0, 150)),
                k.anchor("center"),
                k.color(255, 0, 0),
                k.area(),
                "btn"
            ]);

            // Interactions
            k.onKeyPress("s", () => {
                k.go("level1"); // Start Game
            });

            k.onKeyPress("n", () => {
                k.shake(20); // Refusal to spawn
                noBtn.text = "NO ES UNA OPCIÓN";
                k.wait(1, () => k.go("level1")); // Illusion of choice
            });

            yesBtn.onClick(() => {
                k.go("level1");
            });

            noBtn.onClick(() => {
                k.shake(20);
                noBtn.text = "NO ES UNA OPCIÓN";
                k.wait(1, () => k.go("level1"));
            });

            // Also accept tap/click to start
            k.onMousePress(() => {
                // Check if not clicking buttons (handled by onClick)
                // but for simplicity, any click works as "Yes" if not strictly handled
                // k.go("level1"); 
                // Commented out to prefer specific button clicks
            });
        });
    });
}
