function filterWorks(category, clickedButton) {
  const boxes = document.querySelectorAll('.portfolio-box');

  boxes.forEach(box => {
    if (category === 'all' || box.dataset.category === category) {
      box.style.display = '';
    } else {
      box.style.display = 'none';
    }
  });

  // Highlight active button
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // portfolio box click
  document.querySelectorAll('.portfolio-box').forEach(box => {
    box.addEventListener('click', () => {
      const url = box.dataset.link;
      if (url) window.location.href = url;
    });
});
});


/*On page load behaviour */
window.onload = () => {
  const allButton = document.querySelector('.filter-buttons button'); // first button is "All"
  filterWorks('all', allButton);
};


