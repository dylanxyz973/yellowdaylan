function filterItems(category, clickedButton, itemSelector) {
  const items = document.querySelectorAll(itemSelector);

  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  // ONLY affect buttons in the same container
  const container = clickedButton.parentElement;
  const buttons = container.querySelectorAll('button');

  buttons.forEach(btn => btn.classList.remove('active'));
  clickedButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {

  // portfolio box click (unchanged)
  document.querySelectorAll('.portfolio-box').forEach(box => {
    box.addEventListener('click', () => {
      const url = box.dataset.link;
      if (url) window.location.href = url;
    });
  });

});


/* On page load behaviour */
window.onload = () => {

  // Portfolio default
  const portfolioAll = document.querySelector('.filter-buttons button');
  if (portfolioAll) {
    filterItems('all', portfolioAll, '.portfolio-box', '.filter-buttons');
  }

  // Certificates default
  const certAll = document.querySelector('.cert-filter-buttons button');
  if (certAll) {
    filterItems('all', certAll, '.cert-list li', '.cert-filter-buttons');
  }

};
