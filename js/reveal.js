document.querySelectorAll('.question-box').forEach(question => {
  question.addEventListener('click', () => {
    // check if this question's content is already visible
    let isOpen = false;
    let next = question.nextElementSibling;
    while (next && !next.classList.contains('question-box')) {
      if (
        !next.classList.contains('always-show') &&
        !next.classList.contains('intro-box') &&
        next.style.display === 'block'
      ) {
        isOpen = true;
        break;
      }
      next = next.nextElementSibling;
    }

    // hide everything except always-show and intro-box
    document.querySelectorAll('.answer-box, .detail-box').forEach(box => {
      if (!box.classList.contains('always-show')) {
        box.style.display = 'none';
      }
    });

    // if it wasn't open, then open it
    if (!isOpen) {
      let reveal = question.nextElementSibling;
      while (reveal && !reveal.classList.contains('question-box')) {
        if (
          !reveal.classList.contains('always-show') &&
          !reveal.classList.contains('intro-box')
        ) {
          if (reveal.classList.contains('detail-box')) {
            reveal.style.display = 'table'; // keep detail-box behavior
          } else {
            reveal.style.display = 'block';
          }
        }
        reveal = reveal.nextElementSibling;
      }
    }
  });
});

