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

    // Background Characters Initialization
    const initBackground = () => {
        const container = document.getElementById('background-characters');
        if (!container) return;

        const photos = [
            'fotos/Abeja/abeja.png',
            'fotos/Conde Patula/Conde Patula.png',
            'fotos/Hermana/Hermana.png',
            'fotos/Iva/Iva.png',
            'fotos/Juli/Juli.png',
            'fotos/Keila/Keila.png',
            'fotos/Luz/luz.png',
            'fotos/Mama/Mama.png',
            'fotos/Marti/marti.png',
            'fotos/Mica/mica.png',
            'fotos/Papa/papa.png',
            'fotos/Roja/roja.png',
            'fotos/maria micaela/Maria Micaela.png',
            'fotos/srta entropia/srta entropia.png',
            'fotos/thor/Thor.png'
        ];

        // Generate denser slots procedurally to fill the screen
        const slots = [];

        // Helper to add a slot with some random jitter
        const addSlot = (baseX, baseY) => {
            slots.push({
                left: (baseX + Math.random() * 2 - 1) + 'vw', // +/- 1vw jitter
                top: (baseY + Math.random() * 2 - 1) + 'vh'
            });
        };

        // 1. Left Columns (2 columns vertical)
        for (let y = 5; y < 95; y += 12) {
            addSlot(3, y);  // Inner col
            addSlot(10, y + 6); // Outer col, offset y
        }

        // 2. Right Columns (2 columns vertical)
        for (let y = 5; y < 95; y += 12) {
            addSlot(92, y);
            addSlot(82, y + 6);
        }

        // 3. Top Rows (2 rows horizontal)
        for (let x = 15; x < 85; x += 10) {
            addSlot(x, 5);
            addSlot(x + 5, 12);
        }

        // 4. Bottom Rows (2 rows horizontal)
        for (let x = 15; x < 85; x += 10) {
            addSlot(x, 92);
            addSlot(x + 5, 84);
        }

        // Fill all slots, repeating photos as needed
        slots.forEach(slot => {
            // Pick a random photo
            const photo = photos[Math.floor(Math.random() * photos.length)];

            const img = document.createElement('img');
            img.src = photo;
            img.classList.add('bg-char');

            img.style.left = slot.left;
            img.style.top = slot.top;

            // Random styling
            const randomScale = 0.4 + Math.random() * 0.6; // Slightly smaller to accommodate density
            img.style.transform = `scale(${randomScale})`;

            // Random Animation Props
            img.style.animationDuration = (Math.random() * 6 + 4) + 's';
            img.style.animationDelay = -(Math.random() * 5) + 's';

            container.appendChild(img);
        });
    };

    initBackground();

});
