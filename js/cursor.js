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
    cursorShape.style.transform = 'scale(1.4)';
    cursorShape.style.borderColor = '#FF4D00'; 
    cursorShape.style.boxShadow = '0 0 0 2.5px #00F5FF'; 
  });
  el.addEventListener('mouseleave', () => {
    cursorShape.style.transform = 'scale(1)';
    cursorShape.style.borderColor = '#F4EAD0';
    cursorShape.style.boxShadow = '0 0 0 2.5px #B6FF00'; 
  });
});

