const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#closingmenu');
const mobileMenuContainer = document.querySelector('.mobile-menu');

function openmenu() {
   mobileMenuContainer.classList.remove('hidden');
}
hamburgermenu.addEventListener('click', openmenu);
function closemenu() {
   mobileMenuContainer.classList.add('hidden');
}
closingmenu.addEventListener('click', closemenu);