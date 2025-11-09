const hamMenu = document.querySelector('.hamburger');

const navBar = document.querySelector('.nav-links');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
})