const icon = document.body.querySelector('.icon');
const search = document.body.querySelector('.search');
const clear = document.body.querySelector('.clear');
const searchInput = document.body.querySelector('#my-search');

icon.addEventListener('click', () => {
  search.classList.toggle('active');
});

clear.addEventListener('click', () => {
  searchInput.value = '';
});