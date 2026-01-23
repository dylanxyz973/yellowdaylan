  const images = document.querySelectorAll(".gallery-item");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
  }

  // Initial image
  showImage(currentIndex);

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });