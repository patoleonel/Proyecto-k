export function addVirtualControls(k) {
    const btnSize = 64;
    const padding = 24;

    // State
    let leftPressed = false;
    let rightPressed = false;
    let jumpPressed = false;

    // Only create UI if touch is available (Heuristic)
    // We check for maxTouchPoints or 'coarse' pointer (touch)
    const isTouch = navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
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

        // Touch Input Loop
        k.onUpdate(() => {
            leftPressed = false;
            rightPressed = false;
            jumpPressed = false;

            if (k.getTouchPoints) {
                const touches = k.getTouchPoints();
                for (const t of touches) {
                    if (leftBtn.hasPoint(t.pos)) leftPressed = true;
                    if (rightBtn.hasPoint(t.pos)) rightPressed = true;
                    if (jumpBtn.hasPoint(t.pos)) jumpPressed = true;
                }
            }
            // Mouse fallback for hybrid devices (laptops with touch)
            if (k.isMouseDown()) {
                if (leftBtn.isHovering()) leftPressed = true;
                if (rightBtn.isHovering()) rightPressed = true;
                if (jumpBtn.isHovering()) jumpPressed = true;
            }
        });
    }

    // Return state getters (will just be false if buttons don't exist)
    return {
        isLeft: () => leftPressed,
        isRight: () => rightPressed,
        isJump: () => jumpPressed
    };
}
