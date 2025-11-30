import { setupInput } from "../utils/input";

export function sceneIntro(k) {
    k.scene("intro", () => {
        const { inputJump } = setupInput(k);

        k.add([
            k.text("El Viaje de Keila\n30 Años", { size: 48 }),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(0, 0, 0), // Black text
        ]);

        k.add([
            k.text("Presiona ESPACIO o TOCA para Iniciar", { size: 24 }),
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
}
