export function createPlayer(k, pos) {
    const player = k.add([
        k.sprite("maria", { height: 80 }), // Resize to fit, keep aspect ratio
        k.pos(pos),
        k.area(),
        k.body(),
        k.anchor("center"),
        "player"
    ]);
    return player;
}
