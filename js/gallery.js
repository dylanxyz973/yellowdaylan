document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalLabel = document.getElementById('modal-label');
  const closeModal = document.querySelector('.close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  const images = Array.from(galleryImages).map(img => ({
    src: img.dataset.src,
    label: img.dataset.label
  }));

  let currentImgIndex = 0;

  function openModal(index) {
    currentImgIndex = index;
    updateModalContent();
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function updateModalContent() {
    modalImg.src = images[currentImgIndex].src;
    modalLabel.textContent = images[currentImgIndex].label;
  }

  galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => openModal(i));
  });

  closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  };

  prevBtn.onclick = (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    updateModalContent();
  };

  nextBtn.onclick = (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex + 1) % images.length;
    updateModalContent();
  };

  modal.addEventListener('click', (e) => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  modal.querySelector('.modal-img-wrapper').onclick = (e) => {
  e.stopPropagation();
};

  // Always start hidden
  modal.style.display = 'none';
});
