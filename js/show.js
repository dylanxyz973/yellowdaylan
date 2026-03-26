const headers = document.querySelectorAll('h4');

// hide all <p> initially
document.querySelectorAll('h4 + p').forEach(p => {
  p.style.display = 'none';
});

// add + symbol
headers.forEach(h => {
  const text = h.textContent.trim();
  h.textContent = `+ ${text}`;

  h.addEventListener('click', () => {
    const p = h.nextElementSibling;
    if (!p || p.tagName !== 'P') return;

    const isOpen = p.style.display === 'block';

    // close all
    document.querySelectorAll('h4 + p').forEach(el => {
      el.style.display = 'none';
    });

    // reset all headers
    headers.forEach(head => {
      const t = head.textContent.replace(/^[-+]\s*/, '');
      head.textContent = `+ ${t}`;
    });

    // open clicked
    if (!isOpen) {
      p.style.display = 'block';
      h.textContent = `- ${text}`;
    }
  });
});
