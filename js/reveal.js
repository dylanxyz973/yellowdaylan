const questions = document.querySelectorAll('.question-box');

questions.forEach(question => {
  const text = question.textContent.trim();
  question.textContent = `+ ${text}`;

  question.addEventListener('click', () => {
    let el = question.nextElementSibling;
    let isOpen = false;

    // check if already open
    while (el && !el.classList.contains('question-box')) {
      if (el.style.display !== 'none') {
        isOpen = true;
        break;
      }
      el = el.nextElementSibling;
    }

    // close everything
    document.querySelectorAll('.question-box + *').forEach(item => {
      item.style.display = 'none';
    });

    // reset all questions
    questions.forEach(q => {
      const t = q.textContent.replace(/^[-+]\s*/, '');
      q.textContent = `+ ${t}`;
    });

    // open clicked section
    if (!isOpen) {
      el = question.nextElementSibling;

      while (el && !el.classList.contains('question-box')) {
        el.style.display = el.classList.contains('reveal-row')
          ? 'flex'
          : 'block';
        el = el.nextElementSibling;
      }

      question.textContent = `- ${text}`;
    }
  });
});
