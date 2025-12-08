// [1] VIDEO SOURCE
import introVideoPath from "../../assets_nivel1/saludo_inicial.mov";

// [2] MUSIC SOURCE
import introMusicPath from "../../assets_nivel1/intro.wav";

export function sceneIntro(k) {
    k.scene("intro", () => {
        k.setBackground(0, 0, 0); // Black void

        // --- AUDIO SETUP ---
        k.loadSound("intro_music", introMusicPath);

        // --- START INTERACTION ---
        const startText = k.add([
            k.text("Click to Start", { size: 32 }),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255),
            "start_btn"
        ]);

        let video = null;
        let music = null;

        k.onClick(() => {
            if (video || music) return; // Already started

            k.destroy(startText);

            // --- VIDEO SETUP ---
            video = document.createElement("video");
            video.src = introVideoPath;
            video.style.position = "absolute";
            video.style.top = "50%";
            video.style.left = "50%";
            video.style.transform = "translate(-50%, -50%)";
            video.style.width = "50%";
            video.style.height = "50%";
            video.style.objectFit = "contain";
            video.style.zIndex = "1000";
            video.autoplay = true;
            video.muted = true; // Video muted, we play separate audio


            document.body.appendChild(video);

            // Explicit play attempt
            video.play().catch(e => console.error("Video play failed:", e));

            // Play music
            music = k.play("intro_music", {
                loop: false,
                volume: 0.5
            });



            // When video ends
            video.onended = () => {
                finishIntro();
            };
        });

        let videoEnded = false;

        // --- CLEANUP ---
        function cleanup() {
            if (video && video.parentNode) {
                video.pause();
                video.parentNode.removeChild(video);
            }
            if (music) music.stop();
        }

        k.onSceneLeave(() => {
            cleanup();
        });

        // --- EVENTS ---

        // Skip with Space
        k.onKeyPress("space", () => {
            if (!videoEnded) {
                finishIntro();
            }
        });

        function finishIntro() {
            if (videoEnded) return;
            videoEnded = true;

            // visually hide video components
            video.style.display = "none";
            if (video && video.parentNode) {
                video.pause();
                video.parentNode.removeChild(video);
                // Note: We do NOT stop music here. It keeps playing.
            }

            showChoice();
        }

        function showChoice() {
            // Phase 2: The Choice
            const title = k.add([
                k.text("La vida es caótica.\n\n¿Deseas Nacer?", { size: 32, align: "center" }),
                k.pos(k.center()),
                k.anchor("center"),
                k.color(255, 255, 255),
            ]);

            const yesBtn = k.add([
                k.text("[ S ] SÍ", { size: 24 }),
                k.pos(k.center().add(0, 100)),
                k.anchor("center"),
                k.color(0, 255, 0),
                k.area(),
                "btn"
            ]);

            const noBtn = k.add([
                k.text("[ N ] NO", { size: 24 }),
                k.pos(k.center().add(0, 150)),
                k.anchor("center"),
                k.color(255, 0, 0),
                k.area(),
                "btn"
            ]);

            // Interactions
            // Interactions
            k.onKeyPress("s", () => { if (music) music.stop(); k.go("level1"); });
            k.onKeyPress("n", () => {
                k.shake(20);
                noBtn.text = "NO ES UNA OPCIÓN";
                k.wait(1, () => { if (music) music.stop(); k.go("level1"); });
            });

            yesBtn.onClick(() => { if (music) music.stop(); k.go("level1"); });
            noBtn.onClick(() => {
                k.shake(20);
                noBtn.text = "NO ES UNA OPCIÓN";
                k.wait(1, () => { if (music) music.stop(); k.go("level1"); });
            });
        }

    });

}
