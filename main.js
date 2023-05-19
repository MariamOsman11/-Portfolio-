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

/// /contact-validation
const form = document.querySelector('.contact-form');
const email = document.querySelector('.user-email');
const errorMsg = document.querySelector('.error');
form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  const emailchecker = emailValue.replace(/[^a-zA-Z]/g, '').split('');
  for (let counter = 0; counter < emailchecker.length; counter += 1) {
    if (emailchecker[counter] === emailchecker[counter].toUpperCase()) {
      errorMsg.innerText = 'Invalid,Email should be in Lowercase';
      event.preventDefault();
    }
  }
});