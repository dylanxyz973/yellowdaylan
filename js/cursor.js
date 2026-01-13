const cursor = document.querySelector('.custom-cursor');
const cursorShape = document.querySelector('.cursor-shape');

// move with mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// hover effect
const hoverables = document.querySelectorAll(
  'a, input, textarea, select, [contenteditable="true"], .portfolio-box, .work-card'
);

hoverables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorShape.style.transform = 'scale(1.5)';
    cursorShape.style.borderColor = '#ffb20f'; // golden
    cursorShape.style.boxShadow = '0 0 0 2px rgba(255, 178, 15, 0.6)'; // square glow
  });
  el.addEventListener('mouseleave', () => {
    cursorShape.style.transform = 'scale(1)';
    cursorShape.style.borderColor = '#ffffff';
    cursorShape.style.boxShadow = '0 0 0 2px rgba(0, 255, 255, 0.6)'; // back to cyan glow
  });
});

