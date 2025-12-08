import { addVirtualControls } from "../ui/controls";

export function setupInput(k) {
    // Initialize Virtual Controls
    const mobileControls = addVirtualControls(k);

    return {
        isLeft: () => k.isKeyDown("left") || k.isKeyDown("a") || mobileControls.isLeft(),
        isRight: () => k.isKeyDown("right") || k.isKeyDown("d") || mobileControls.isRight(),
        isJump: () => k.isKeyPressed("space") || k.isKeyPressed("w") || k.isKeyPressed("up") || mobileControls.isJump(),
        isFire: () => k.isKeyPressed("z") || k.isKeyPressed("x") || k.isKeyPressed("enter")
    };
}
