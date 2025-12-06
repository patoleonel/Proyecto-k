export function addVirtualControls(k) {
    const btnSize = 64;
    const padding = 24;

    // State
    let leftPressed = false;
    let rightPressed = false;
    let jumpPressed = false;

    // Left Button
    const leftBtn = k.add([
        k.rect(btnSize, btnSize),
        k.pos(padding, k.height() - btnSize - padding),
        k.color(255, 255, 255),
        k.opacity(0.5),
        k.fixed(),
        k.area(),
        k.anchor("topleft"),
        "mobile_btn"
    ]);

    k.add([
        k.text("<", { size: 32 }),
        k.pos(padding + btnSize / 2, k.height() - btnSize / 2 - padding),
        k.anchor("center"),
        k.fixed(),
        k.color(0, 0, 0)
    ]);

    // Right Button
    const rightBtn = k.add([
        k.rect(btnSize, btnSize),
        k.pos(padding * 2 + btnSize, k.height() - btnSize - padding),
        k.color(255, 255, 255),
        k.opacity(0.5),
        k.fixed(),
        k.area(),
        k.anchor("topleft"),
        "mobile_btn"
    ]);

    k.add([
        k.text(">", { size: 32 }),
        k.pos(padding * 2 + btnSize + btnSize / 2, k.height() - btnSize / 2 - padding),
        k.anchor("center"),
        k.fixed(),
        k.color(0, 0, 0)
    ]);

    // Jump Button
    const jumpBtn = k.add([
        k.circle(btnSize / 1.5),
        k.pos(k.width() - padding - btnSize, k.height() - btnSize),
        k.color(255, 255, 255),
        k.opacity(0.5),
        k.fixed(),
        k.area(),
        k.anchor("center"),
        "mobile_btn"
    ]);

    k.add([
        k.text("A", { size: 32 }),
        k.pos(k.width() - padding - btnSize, k.height() - btnSize),
        k.anchor("center"),
        k.fixed(),
        k.color(0, 0, 0)
    ]);

    // Input Loop
    // Use onUpdate + isHovering/Touch checks to avoid crashing on missing methods like .onDown
    k.onUpdate(() => {
        leftPressed = false;
        rightPressed = false;
        jumpPressed = false;

        // 1. Mouse Check
        // isHovering() checks if mouse position is within the area
        if (k.isMouseDown()) {
            if (leftBtn.isHovering()) leftPressed = true;
            if (rightBtn.isHovering()) rightPressed = true;
            if (jumpBtn.isHovering()) jumpPressed = true;
        }

        // 2. Touch Check (Multi-touch support)
        // getTouchPoints returns an array of current touches
        if (k.getTouchPoints) {
            const touches = k.getTouchPoints();
            for (const t of touches) {
                // Check if touch point is inside button area
                if (leftBtn.hasPoint(t.pos)) leftPressed = true;
                if (rightBtn.hasPoint(t.pos)) rightPressed = true;
                if (jumpBtn.hasPoint(t.pos)) jumpPressed = true;
            }
        }
    });

    return {
        isLeft: () => leftPressed,
        isRight: () => rightPressed,
        isJump: () => jumpPressed
    };
}
