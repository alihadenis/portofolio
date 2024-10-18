const bar = document.querySelector('.toggle-container');
const lii = document.querySelectorAll('.nav-link');

// Ketika 'bar' diklik, toggle 'active' untuk semua elemen dengan class 'nav-link'
bar.addEventListener('click', () => {
  lii.forEach((link) => {
    link.classList.toggle('active');
    link.classList.toggle('nav-link');
  });
});
