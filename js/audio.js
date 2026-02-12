const image = document.getElementById("soundImage");
const audio = document.getElementById("imageAudio");

image.addEventListener("click", () => {
  if (audio.paused) {
    // Every time we start, we go back to the beginning
    audio.currentTime = 0; 
    audio.play();
  } else {
    // If it's playing, we stop it right where it is
    audio.pause();
  }
});
