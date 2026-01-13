document.addEventListener('DOMContentLoaded', () => {
  // Core elements
  const carousel = document.querySelector('.work-carousel');
  if (!carousel) { console.warn('No .work-carousel found'); return; }

  const prev   = carousel.querySelector('#prev');  
  const next   = carousel.querySelector('#next');  
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

  // --- Optional: place arrows beside the active card (flush to left/right) ---
  function positionArrowsBesideCard() {
    const active = slides[index];
    if (!active) return;

    const cRect = carousel.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();

    // Middle Y of the active card relative to the carousel
    const midY = aRect.top - cRect.top + aRect.height / 2;

    // Distance between arrow and card edge
    const gap = 12; // px; tweak as you like

    // Compute X positions relative to the carousel container
    const prevX = aRect.left - cRect.left - prev.offsetWidth - gap;
    const nextX = aRect.right - cRect.left + gap;

    // Apply positions
    prev.style.top = `${midY}px`;
    next.style.top = `${midY}px`;
    prev.style.left = `${prevX}px`;
    next.style.left = `${nextX}px`;
  }

  // Initial positioning (comment these 3 lines if you don't want dynamic positioning)
  positionArrowsBesideCard();
  window.addEventListener('resize', positionArrowsBesideCard);

  // Arrow handlers
  const goPrev = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    index = (index - 1 + slides.length) % slides.length;
    setActive(index);
    positionArrowsBesideCard(); // comment out if not using positioning
  };

  const goNext = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    index = (index + 1) % slides.length;
    setActive(index);
    positionArrowsBesideCard(); // comment out if not using positioning
  };

  prev.addEventListener('click', goPrev);
  next.addEventListener('click', goNext);

  // Optional: snappier touch support
  ['touchstart'].forEach(evt => {
    prev.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); goPrev(e); }, { passive: false });
    next.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); goNext(e); }, { passive: false });
  });

  // Click the visible card to navigate to its data-link (ignore clicks on the arrows)
  carousel.addEventListener('click', (e) => {
    if (e.target.closest('.arrow')) return;
    const card = slides[index];
    if (!card) return;
    const href = card.dataset?.link || card.getAttribute('data-link');
    if (href) window.location.href = href;
  });

  // Keyboard support on the carousel container
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(e); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goNext(e); }
    if (e.key === 'Enter') {
      e.preventDefault();
      const href = slides[index]?.dataset?.link || slides[index]?.getAttribute('data-link');
      if (href) window.location.href = href;
    }
  });
});


