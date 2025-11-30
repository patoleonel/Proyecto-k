export function setupInput(k) {
    const uiJumpBtn = {
        isClicked: () => k.isMousePressed()
    };

    return {
        inputJump: () => k.isKeyPressed("space") || uiJumpBtn.isClicked()
    };
}
