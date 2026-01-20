const questions = document.querySelectorAll('.question-box');

questions.forEach(question => {
  const text = question.textContent.trim();
  question.textContent = `+ ${text}`;

  question.addEventListener('click', () => {
    let reveal = question.nextElementSibling;
    let isOpen = false;

    // check if already open
    while (reveal && !reveal.classList.contains('question-box')) {
      if (reveal.classList.contains('detail-box') || reveal.classList.contains('answer-box')) {
        if (reveal.style.display !== 'none') {
          isOpen = true;
        }
      }
      reveal = reveal.nextElementSibling;
    }

    // close all answers
    document.querySelectorAll('.detail-box, .answer-box').forEach(box => {
      box.style.display = 'none';
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
        if (reveal.classList.contains('detail-box') || reveal.classList.contains('answer-box')) {
          reveal.style.display = reveal.classList.contains('detail-box')
            ? 'inline-block'
            : 'block';
        }
        reveal = reveal.nextElementSibling;
      }

      question.textContent = `- ${text}`;
    }
  });
});
