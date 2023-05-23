//Menu burger de la navbar
const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
});