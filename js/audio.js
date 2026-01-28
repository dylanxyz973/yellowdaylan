const image = document.getElementById("soundImage");
const audio = document.getElementById("imageAudio");

image.addEventListener("click", () => {
  audio.currentTime = 0; // restart sound if clicked again
  audio.play();
});
