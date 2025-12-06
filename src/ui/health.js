export function createHealthUI(k) {
    const hearts = [];
    const START_X = 50;
    const START_Y = 50;
    const GAP = 40;

    // Create 5 hearts container
    const container = k.add([
        k.fixed(),
        k.z(100),
        "health_ui"
    ]);

    for (let i = 0; i < 5; i++) {
        // Placeholder for heart: Red square/text for now until assets
        const heart = container.add([
            k.text("♥", { size: 32 }),
            k.pos(START_X + (i * GAP), START_Y),
            k.color(255, 0, 0),
            k.fixed(),
            "heart" // Tag to find/animate
        ]);
        hearts.push(heart);
    }

    return {
        update(currentHealth) {
            hearts.forEach((heart, index) => {
                if (index < currentHealth) {
                    heart.opacity = 1;
                    heart.color = k.rgb(255, 0, 0); // Red (Active)
                } else {
                    heart.opacity = 0.3; // Dimmed (Lost)
                    heart.color = k.rgb(100, 100, 100); // Grey
                }
            });
        }
    };
}
