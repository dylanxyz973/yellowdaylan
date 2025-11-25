document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalLabel = document.getElementById('modal-label');
  const closeModal = document.querySelector('.close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  const images = Array.from(document.querySelectorAll('.gallery-item')).map(img => ({
  src: img.dataset.src,
  label: img.dataset.label
  }));

  let currentImgIndex = 0;
  let modalManuallyOpened = false;

  function openModal(index) {
    modalManuallyOpened = true;

    const selectedImage = images[index];
    const tempImg = new Image();

    tempImg.onload = () => {
      currentImgIndex = index;
      updateModalContent();
      modal.style.display = 'flex';
    };

    tempImg.onerror = () => {
      console.error('Image failed to load:', selectedImage.src);
      alert('Sorry, the image could not be loaded.');
    };

    tempImg.src = selectedImage.src;
  }

  function updateModalContent() {
    modalImg.src = images[currentImgIndex].src;
    modalLabel.textContent = images[currentImgIndex].label;
  }

  if (galleryImages.length > 0) {
    galleryImages.forEach((img, i) => {
      img.addEventListener('click', () => openModal(i));
    });

    closeModal.onclick = () => {
      modal.style.display = 'none';
      modalManuallyOpened = false;
    };

    prevBtn.onclick = () => {
      currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
      updateModalContent();
    };

    nextBtn.onclick = () => {
      currentImgIndex = (currentImgIndex + 1) % images.length;
      updateModalContent();
    };

    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modalManuallyOpened = false;
      }
    };
  }

  // Defensive: Ensure modal is hidden unless manually triggered
  window.addEventListener('load', () => {
    if (!modalManuallyOpened) {
      modal.style.display = 'none';
    }
  });
});
