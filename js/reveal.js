const questions = document.querySelectorAll('.question-box');

questions.forEach(question => {
  const text = question.textContent.trim();
  question.textContent = `+ ${text}`;

  question.addEventListener('click', () => {
    let reveal = question.nextElementSibling;
    let isOpen = false;

    // check if already open
    while (reveal && !reveal.classList.contains('question-box')) {
      if (
        reveal.classList.contains('detail-box') ||
        reveal.classList.contains('answer-box') ||
        reveal.classList.contains('reveal-img') ||
        reveal.classList.contains('reveal-row')
      ) {
        if (reveal.style.display !== 'none') {
          isOpen = true;
        }
      }
      reveal = reveal.nextElementSibling;
    }

    // close all revealable elements
    document
      .querySelectorAll('.detail-box, .answer-box, .reveal-img, .reveal-row')
      .forEach(el => {
        el.style.display = 'none';
      });

    // reset all questions
    questions.forEach(q => {
      const t = q.textContent.replace(/^[-+]\s*/, '');
      q.textContent = `+ ${t}`;
    });

    // open clicked question
    if (!isOpen) {
      reveal = question.nextElementSibling;
      while (reveal && !reveal.classList.contains('question-box')) {

        // CASE 1: reveal-row (image + detail layout)
        if (reveal.classList.contains('reveal-row')) {
          reveal.style.display = 'flex';

          // show children inside reveal-row
          reveal.querySelectorAll('.detail-box, .answer-box, .reveal-img')
            .forEach(child => {
              child.style.display = 'block';
            });
        }
        
        // CASE 2: normal standalone boxes
        if (
          reveal.classList.contains('detail-box') ||
          reveal.classList.contains('answer-box') ||
          reveal.classList.contains('reveal-img')
        ) {
          reveal.style.display = 'block';
        }

        if (reveal.classList.contains('reveal-row')) {
          reveal.style.display = 'flex';
        }

        reveal = reveal.nextElementSibling;
      }

      question.textContent = `- ${text}`;
    }
  });
});
