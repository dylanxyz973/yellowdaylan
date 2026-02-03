const questions = document.querySelectorAll('.question-box');

document
  .querySelectorAll('.reveal-row, .reveal-img, .clickable-image, .answer-box, .detail-box')
  .forEach(el => {
    el.style.display = 'none';
  });

questions.forEach(question => {
  const text = question.textContent.trim();
  question.textContent = `+ ${text}`;

  question.addEventListener('click', () => {
    const row = question.nextElementSibling;
    if (!row || !row.classList.contains('reveal-row')) return;

    const isOpen = row.style.display === 'flex';

    // close everything
    document.querySelectorAll('.reveal-row').forEach(r => {
      r.style.display = 'none';
      r.querySelectorAll('*').forEach(child => {
        child.style.display = 'none';
      });
    });

    // reset all questions
    questions.forEach(q => {
      const t = q.textContent.replace(/^[-+]\s*/, '');
      q.textContent = `+ ${t}`;
    });

    // open clicked one
    if (!isOpen) {
      row.style.display = 'flex';

      row.querySelectorAll('*').forEach(child => {
        child.style.display = 'block';
      });

      question.textContent = `- ${text}`;
    }
  });
});
