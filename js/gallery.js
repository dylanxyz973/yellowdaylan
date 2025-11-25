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
  let modalManuallyOpened = false;

  function openModal(index) {
  modalManuallyOpened = true;

  const selectedImage = images[index];
  const tempImg = new Image();

  tempImg.onload = () => {
    currentImgIndex = index;
    updateModalContent();

    // show modal
    modal.style.display = 'flex';

    // lock scroll & reset viewport
    document.body.classList.add('modal-open');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  tempImg.onerror = () => {
    console.error('Image failed to load:', selectedImage.src);
    alert('Sorry, the image could not be loaded.');
  };

  tempImg.src = selectedImage.src;
}

closeModal.onclick = () => {
  modal.style.display = 'none';
  modalManuallyOpened = false;
  document.body.classList.remove('modal-open');
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalManuallyOpened = false;
    document.body.classList.remove('modal-open');
  }
};


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
      document.body.classList.remove('modal-open');
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
        document.body.classList.remove('modal-open');
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

