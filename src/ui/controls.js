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

    // Touch/Mouse Events
    // Kaplay doesn't have built-in "isHeld" for UI objects easily without component logic
    // We'll use simple touch events tracking

    leftBtn.onDown(() => leftPressed = true);
    leftBtn.onHover(() => { if (k.isMouseDown()) leftPressed = true; }); // Mouse fallback
    leftBtn.onRelease(() => leftPressed = false);
    leftBtn.onEnd(() => leftPressed = false); // Touch end

    rightBtn.onDown(() => rightPressed = true);
    rightBtn.onHover(() => { if (k.isMouseDown()) rightPressed = true; });
    rightBtn.onRelease(() => rightPressed = false);
    rightBtn.onEnd(() => rightPressed = false);

    jumpBtn.onDown(() => jumpPressed = true);
    jumpBtn.onHover(() => { if (k.isMouseDown()) jumpPressed = true; });
    jumpBtn.onRelease(() => jumpPressed = false);
    jumpBtn.onEnd(() => jumpPressed = false);

    // Cleanup on scene switch is handled by Kaplay destroying objects, 
    // but we need to ensure state doesn't stick if we were holding a button
    // The nice thing about returning functions is they query current state.

    return {
        isLeft: () => leftPressed,
        isRight: () => rightPressed,
        isJump: () => jumpPressed
    };
}
