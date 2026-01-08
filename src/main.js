document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const landingScreen = document.getElementById('landing');
    const mainContentScreen = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');
    const playVideoBtn = document.getElementById('play-video-btn');

    // Music Handling
    // Note: Browsers block autoplay until user interaction. 
    // We will try to play on 'Start' click.

    startBtn.addEventListener('click', () => {
        // 1. Transition Screens
        landingScreen.classList.remove('active');
        landingScreen.classList.add('hidden');

        setTimeout(() => {
            landingScreen.style.display = 'none'; // fully remove from flow if needed
            mainContentScreen.classList.remove('hidden');

            // short delay to allow 'display: block' effects if we were toggling display
            // but here we use opacity/transforms, so we just add active
            requestAnimationFrame(() => {
                mainContentScreen.classList.add('active');
            });
        }, 500); // match transition time roughly or half

        // 2. Play Music
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log("Music play blocked:", error);
            });
        }
    });

    // Password Protection for Video
    const passwordModal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('password-input');
    const cancelBtn = document.getElementById('cancel-btn');
    const unlockBtn = document.getElementById('unlock-btn');
    const errorMsg = document.getElementById('error-msg');
    const videoCardPlaceholder = document.querySelector('.video-placeholder-vertical');

    // Configure your password here
    const SECRET_PASSWORD = "DOITFORHER";

    playVideoBtn.addEventListener('click', () => {
        // Reset modal state
        passwordInput.value = '';
        errorMsg.classList.add('hidden');
        passwordModal.classList.remove('hidden');
        passwordInput.focus();
    });

    cancelBtn.addEventListener('click', () => {
        passwordModal.classList.add('hidden');
    });

    const attemptUnlock = () => {
        if (passwordInput.value.toUpperCase() === SECRET_PASSWORD) {
            // Success: Unlock the video
            passwordModal.classList.add('hidden');

            // Replace placeholder with iframe or video element
            // Using a placeholder YouTube video or simple success message for now
            // You can replace 'video_id' with your actual vertical video ID

            videoCardPlaceholder.innerHTML = `
            <div style="width: 100%; height: 100%; background: black; display: flex; align-items: center; justify-content: center;">
                <video controls autoplay style="width: 100%; height: 100%; object-fit: contain;">
                    <source src="./video/FelCumK.mp4" type="video/mp4">
                    <source src="./video/FelCumK.mp4" type="video/quicktime">
                    Your browser does not support the video tag.
                </video>
            </div>
          `;

            // Optionally auto-play if it was a local video file
            // const video = document.createElement('video'); ...

        } else {
            // Failure: Show error
            errorMsg.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();

            // Simple shake effect
            passwordInput.style.transform = "translateX(5px)";
            setTimeout(() => passwordInput.style.transform = "translateX(-5px)", 50);
            setTimeout(() => passwordInput.style.transform = "translateX(5px)", 100);
            setTimeout(() => passwordInput.style.transform = "translateX(0)", 150);
        }
    };

    unlockBtn.addEventListener('click', attemptUnlock);

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            attemptUnlock();
        }
    });

});
