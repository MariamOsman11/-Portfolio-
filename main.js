const hamburgermenu = document.querySelector('#hamburger-menu-id');
const closingmenu = document.querySelector('#mobile-menu-close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu');
const menuList = document.querySelector('#menu-list');

function openmenu() {
  mobileMenuContainer.classList.add('show');
}
hamburgermenu.addEventListener('click', openmenu);
function closemenu() {
  mobileMenuContainer.classList.remove('show');
}
closingmenu.addEventListener('click', closemenu);
menuList.addEventListener('click', closemenu);

// Project popup code starts here
const projectData = [
  {
    id: 0,
    name: 'Tonic',
    tag: { sector: 'Canopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'Assets/Snapshoot Portfolio Card1.svg',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    technologies: ['Html', 'CSS', 'JavaScript'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    tag: { sector: 'Canopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'Assets/Snapshoot Portfolio Card2.svg',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    technologies: ['Html', 'CSS', 'JavaScript'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 2,
    name: 'Tonic',
    tag: { sector: 'Canopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'Assets/Snapshoot Portfolio Card3.svg',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    technologies: ['Html', 'CSS', 'JavaScript'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    tag: { sector: 'Canopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'Assets/Snapshoot Portfolio Card4.svg',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    technologies: ['Html', 'CSS', 'JavaScript'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
];

function insertTechList(data) {
  let techList = '';
  function insertTech(data) {
    techList += `<li class="tech-langs">${data}</li>`;
  }
  data.technologies.map(insertTech);
  return techList;
}

(function loadProjectData() {
  let htmlSkeletonToInsert = '';
  function insertData(data, index) {
    const techList = insertTechList(data);
    htmlSkeletonToInsert += `<div class="card">
     <div class="card-img">
       <img
         src="${data.image}"
         alt="Tonic-project-image"
         title="Tonic-project"
       />
     </div>
     <div class="card-content facebook-card">
       <h3 class="card-title">${data.name}</h3>
       <ul class="card-info">
         <li class="bold-info">${data.tag.sector}</li>
         <li class="info bullet"><span></span>${data.tag.type}</li>
         <li class="info bullet"><span></span>${data.tag.year}</li>
       </ul>
       <p class="card-para">
         ${data.description}
       </p>
       <ul class="card-lang">
      ${techList}
      </ul>
       <button class="card-btn" data-value="${index}">See Project</button>
     </div>
   </div>
     `;
  }
  projectData.map(insertData);
  document.getElementById('portflio').innerHTML = htmlSkeletonToInsert;
}());

function closeProjectPopup() {
  document.getElementsByClassName('popup-section')[0].style.display = 'none';
}

const triggerElem = document.getElementsByClassName('card-btn');
function openProjectPopup(e) {
  e.preventDefault();
  const targetIndex = e.target.attributes[1].value;
  const techList = insertTechList(projectData[targetIndex]);

  const elemToInsert = `
   <h3 class="title work-title">
     ${projectData[targetIndex].name}
     <img  class="clossing-project"src="images/Iconx.png" alt="">
     </h3>
    
     <div class="work-info">
     <ul class="work-tag-popup">
         <li class="first-li">CANOPY</li>
        <li class="second-li">
            <img src="./images/counter.png">
            Back End Dev
        </li>
         <li class="second-li">
            <img src="./images/counter.png">
            2015
         </li>
     </ul>
     </div>
     <img src="${projectData[targetIndex].image}" alt="" class="popup-image mobile-pop-img">
     <div class="work-tag-button-wrapper  work-mobile-wrapper">
     <p class="work-description work-description-mobile">
     ${projectData[targetIndex].details}
     </p>
     <div class="work-tag-wrapper">
     <div class="work-tag">
     <ul class="card-lang">
     ${techList}
     </ul>
     </div>
     <div class="see-container">
     <a href="https://github.com/MariamOsman11/-Portfolio-.git" id="popup-link" class="see-live" target="_blank">
     <span>seeLive</span>
     <img src="./images/live.png" class="see-image">
     </a>
     <a href="https://github.com/MariamOsman11/-Portfolio-.git" id="popup-link" class="see-live">
     <span>seeSource</span>
     <img src="./images/github.png" class="see-image">
     </a>
     </div>
     </div>`;

  document.getElementsByClassName('window-wrapper')[0].innerHTML = elemToInsert;
  document.getElementsByClassName('popup-section')[0].style.display = 'block';
  const closeElemPopup = document.getElementsByClassName('clossing-project')[0];
  closeElemPopup.addEventListener('click', closeProjectPopup);
}
for (let i = 0; i < triggerElem.length; i += 1) {
  triggerElem[i].addEventListener('click', (e) => { openProjectPopup(e); });
}

// Form validation
const form = document.getElementsByClassName('contact-form')[0];
const email = document.getElementsByClassName('user-email')[0];
const errorMsg = document.getElementsByClassName('error')[0];

function emailLowerCaseChecker(emailchecker, event) {
  for (let counter = 0; counter < emailchecker.length; counter += 1) {
    if (emailchecker[counter] === emailchecker[counter].toUpperCase()) {
      errorMsg.innerText = 'Form not sent! Email should be in Lowercase!';
      event.preventDefault();
      break;
    } else {
      errorMsg.innerText = '';
    }
  }
}

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  const emailchecker = emailValue.replace(/[^a-zA-Z]/g, '').split('');
  emailLowerCaseChecker(emailchecker, event);
});

// local-storage
const formInputFields = document.getElementsByClassName('user-message');
const localStorageObject = {
  name: '',
  email: '',
  message: '',
};
const storageObjectName = 'formDataPm';

const existingObject = localStorage.getItem(storageObjectName);
if (existingObject) {
  const name = document.getElementsByClassName('user-name');
  const email = document.getElementsByClassName('user-email');
  const message = document.getElementsByClassName('user_message');
  const objectData = JSON.parse(existingObject);
  name.value = objectData.name;
  email.value = objectData.email;
  message.value = objectData.message;
}

function storeFormInLocalStorage(data) {
  const objectString = JSON.stringify(data);
  const existingObject = localStorage.getItem(storageObjectName);
  if (existingObject) {
    localStorage.removeItem(storageObjectName);
  }
  localStorage.setItem(storageObjectName, objectString);
}

function manageEvent() {
  const name = document.get('user-name').value;
  const email = document.getElementsByClassName('user-email').value;
  const message = document.getElementById('user_message').value;
  localStorageObject.name = name;
  localStorageObject.email = email;
  localStorageObject.message = message;
  storeFormInLocalStorage(localStorageObject);
}

for (let i = 0; i < formInputFields.length; i += 1) {
  formInputFields[i].addEventListener('input', manageEvent);
}
