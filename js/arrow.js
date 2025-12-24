document.addEventListener('DOMContentLoaded', () => {
  // Grab the carousel, arrows, and cards using your current class names
  const carousel = document.querySelector('.work-carousel');
  if (!carousel) { console.warn('No .work-carousel found'); return; }

  const prev   = carousel.querySelector('.arrow.prev');
  const next   = carousel.querySelector('.arrow.next');
  const slides = Array.from(carousel.querySelectorAll('.work-card'));

  // Diagnostics
  if (!prev || !next) { console.warn('Prev/Next arrow not found inside .work-carousel'); return; }
  if (slides.length === 0) { console.warn('No .work-card inside .work-carousel'); return; }

  // Ensure exactly one active slide at start
  let index = slides.findIndex(el => el.classList.contains('active'));
  if (index < 0) index = 0;

  const setActive = (i) => {
    slides.forEach((el, idx) => el.classList.toggle('active', idx === i));
  };
  setActive(index);

  // Arrow handlers
  prev.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    index = (index - 1 + slides.length) % slides.length;
    setActive(index);
  });

  next.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    index = (index + 1) % slides.length;
    setActive(index);
  });

  // Click the visible card to navigate to its data-link
  // (ignore clicks on the arrows)
  carousel.addEventListener('click', (e) => {
    if (e.target.closest('.arrow')) return;
    const card = slides[index];
    if (!card) return;
    const href = card.dataset?.link || card.getAttribute('data-link');
    if (href) window.location.href = href;
  });

  // Optional: keyboard support on the carousel container
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prev.click(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
    if (e.key === 'Enter')      {
      e.preventDefault();
      const href = slides[index]?.dataset?.link || slides[index]?.getAttribute('data-link');
      if (href) window.location.href = href;
    }
  });
});



