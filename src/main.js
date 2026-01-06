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

  playVideoBtn.addEventListener('click', () => {
      alert("Aquí se abriría el video o el modal del video. (Funcionalidad en desarrollo)");
      // Example implementation:
      // Open a modal or replace the placeholder with an actual iframe
  });
});
