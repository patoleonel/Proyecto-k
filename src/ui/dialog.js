export function startDialog(k, textLines, onFinish) {
    let currentLine = 0;
    let isTyping = false;
    let dialogActive = true;

    // Overlay to pause game/dim background
    const overlay = k.add([
        k.rect(k.width(), k.height()),
        k.pos(0, 0),
        k.fixed(),
        k.color(0, 0, 0),
        k.opacity(0.8),
        k.z(900),
        "dialog_ui"
    ]);

    // Dialog Box
    const box = k.add([
        k.sprite("dialog_box"),
        k.pos(k.center()),
        k.anchor("center"),
        k.fixed(),
        k.scale(Math.min(k.width() / 800, 1)),
        k.z(901),
        "dialog_ui"
    ]);

    // Text Object
    const txt = k.add([
        k.text("", {
            size: 24,
            width: 500,
            font: "Segoe Print",
            align: "center"
        }),
        k.pos(k.center()),
        k.anchor("center"),
        k.fixed(),
        k.color(0, 0, 0),
        k.z(902),
        "dialog_ui"
    ]);

    // Instruction Text
    k.add([
        k.text("ESPACIO para continuar...", { size: 16 }),
        k.pos(k.center().add(0, 200)),
        k.anchor("center"),
        k.fixed(),
        k.color(0, 0, 0),
        k.z(902),
        k.opacity(0.5),
        "dialog_ui"
    ]);

    function typeLine(line) {
        isTyping = true;
        txt.text = "";
        let idx = 0;

        const typeLoop = k.loop(0.05, () => {
            if (idx < line.length) {
                txt.text += line[idx];
                idx++;
            } else {
                isTyping = false;
                typeLoop.cancel();
            }
        });

        return {
            finish: () => {
                txt.text = line;
                isTyping = false;
                typeLoop.cancel();
            }
        };
    }

    let currentTyper = typeLine(textLines[currentLine]);

    // Input Handling
    const inputHandler = k.onKeyPress("space", () => {
        if (!dialogActive) return;

        if (isTyping) {
            currentTyper.finish();
        } else {
            currentLine++;
            if (currentLine < textLines.length) {
                currentTyper = typeLine(textLines[currentLine]);
            } else {
                // End Dialog
                dialogActive = false;
                k.destroyAll("dialog_ui");
                inputHandler.cancel();
                if (onFinish) onFinish();
            }
        }
    });
}
