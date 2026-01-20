document.querySelectorAll('.question-box').forEach(question => {
  // store original text
  const text = question.textContent.trim();

  // set default +
  question.textContent = `+ ${text}`;

  question.addEventListener('click', () => {
    let isOpen = false;
    let next = question.nextElementSibling;

    // check if already open
    while (next && !next.classList.contains('question-box')) {
      const isVisible = window.getComputedStyle(next).display !== 'none';
      if (
        !next.classList.contains('always-show') &&
        !next.classList.contains('intro-box') &&
        isVisible
      ) {
        isOpen = true;
        break;
      }
      next = next.nextElementSibling;
    }

    // hide all answers
    document.querySelectorAll('.answer-box, .detail-box, .intro-box').forEach(box => {
      if (!box.classList.contains('always-show')) {
        box.style.display = 'none';
      }
    });

    // reset all questions to +
    document.querySelectorAll('.question-box').forEach(q => {
      const t = q.textContent.replace(/^[-+]\s*/, '');
      q.textContent = `+ ${t}`;
    });

    // open if not already open
    if (!isOpen) {
      let reveal = question.nextElementSibling;
      while (reveal && !reveal.classList.contains('question-box')) {
        if (
          !reveal.classList.contains('always-show') &&
          !reveal.classList.contains('intro-box')
        ) {
          reveal.style.display = reveal.classList.contains('detail-box')
            ? 'table'
            : 'block';
        }
        reveal = reveal.nextElementSibling;
      }

      // change + to -
      question.textContent = `- ${text}`;
    }
  });
});

