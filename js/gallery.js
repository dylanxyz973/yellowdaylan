document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-item');
  const details = document.querySelectorAll('.detail-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;

  function showImage(index) {
    // Update gallery images
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');

    // Update details
    details.forEach(detail => detail.classList.remove('active'));
    details[index].classList.add('active');

    // Update modal image (if modal exists)
    if (modalImg) {
      modalImg.src = galleryImages[index].dataset.src;
    }
  }

  // Initial state
  showImage(currentIndex);

  // Gallery click → open modal
  galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      currentIndex = i;
      showImage(currentIndex);
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    });
  });

  // Navigation arrows
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  modal.querySelector('.modal-img-wrapper').addEventListener('click', (e) => {
    e.stopPropagation();
  });

  modal.style.display = 'none';
});
