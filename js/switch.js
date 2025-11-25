document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleBtn');
  const img = document.getElementById('toggleImg');

  if (btn && img) {
    const srcA = btn.dataset.imgA;
    const srcB = btn.dataset.imgB;
    let showingA = true;

    btn.addEventListener('click', (e) => {
      e.preventDefault(); // prevent default button behavior
      showingA = !showingA;
      img.src = showingA ? srcA : srcB;
    });
  }
});
