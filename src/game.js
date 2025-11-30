import kaplay from "kaplay";

// Initialize Kaplay
const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    background: [135, 206, 235], // Sky Blue (Campestre)
    global: false, // Disable global to avoid confusion and errors
});

// --- CONSTANTS ---
const SPEED = 320;
const JUMP_FORCE = 800;

// --- INPUT ADAPTER (Section 4 of Contexto) ---
// Abstraction for Hybrid Control (Keyboard + Touch)
const uiJumpBtn = {
    isClicked: () => k.isMousePressed()
};

function inputJump() {
    return k.isKeyPressed("space") || uiJumpBtn.isClicked();
}

// --- SCENES ---

// Scene: Intro
k.scene("intro", () => {
    k.add([
        k.text("Keila's Journey\n30 Años", { size: 48 }),
        k.pos(k.center()),
        k.anchor("center"),
        k.color(0, 0, 0), // Black text
    ]);

    k.add([
        k.text("Press SPACE or TAP to Start", { size: 24 }),
        k.pos(k.center().add(0, 100)),
        k.anchor("center"),
        k.color(0, 0, 0),
    ]);

    k.onUpdate(() => {
        if (inputJump()) {
            k.go("game");
        }
    });
});

// Scene: Game (Stage 1: Campestre)
k.scene("game", () => {
    k.setGravity(1600);

    // UI Layer (Fixed)
    k.add([
        k.text("Stage 1: Campestre", { size: 32 }),
        k.pos(24, 24),
        k.fixed(),
        k.color(0, 0, 0),
    ]);

    // Player (Maria Micaela)
    const player = k.add([
        k.rect(40, 60),
        k.pos(100, 100),
        k.color(255, 0, 0),
        k.area(),
        k.body(),
        k.anchor("center"),
        "player"
    ]);

    // Companion (Abeja - Protector)
    let hasCompanion = true;
    const companion = k.add([
        k.circle(15),
        k.pos(player.pos.sub(40, 40)),
        k.color(255, 215, 0), // Gold
        k.anchor("center"),
        "companion"
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

    // Movement Logic
    k.onUpdate(() => {
        // Camera Follow
        k.camPos(player.pos);

        // Companion Follow (Lerp for smooth movement)
        if (hasCompanion) {
            companion.pos = companion.pos.lerp(player.pos.sub(0, 50), 0.1);
        }

        // Left/Right Movement
        if (k.isKeyDown("left") || k.isKeyDown("a")) {
            player.move(-SPEED, 0);
        }
        if (k.isKeyDown("right") || k.isKeyDown("d")) {
            player.move(SPEED, 0);
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

    // Collision Logic
    player.onCollide("obstacle", (obs) => {
        if (hasCompanion) {
            k.shake(10);
            k.destroy(companion);
            hasCompanion = false;
            k.destroy(obs); // Destroy obstacle too (optional, or just knockback)
        } else {
            k.shake(20);
            k.wait(0.5, () => {
                k.go("game"); // Restart
            });
        }
    });
});

// Start the game
k.go("intro");
