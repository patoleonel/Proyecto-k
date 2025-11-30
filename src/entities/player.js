export function createPlayer(k, pos) {
    const player = k.add([
        k.sprite("maria", { width: 50, height: 80 }), // Resize to fit
        k.pos(pos),
        k.area(),
        k.body(),
        k.anchor("center"),
        "player"
    ]);
    return player;
}
