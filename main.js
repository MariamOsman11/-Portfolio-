const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#mobile-menu-close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu');
const menuList = document.querySelector('#menu-list');

function openmenu() {
  mobileMenuContainer.classList.remove('hidden');
}
hamburgermenu.addEventListener('click', openmenu);
function closemenu() {
  mobileMenuContainer.classList.add('hidden');
}
closingmenu.addEventListener('click', closemenu);
menuList.addEventListener('click', closemenu);