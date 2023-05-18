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


// Project popup code starts here
const projectData = [
   {
     id: 0,
     name: "Tonic",
     tag: {sector: "Canopy", type: "Band End Dev", year: 2015},
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
     image: "Assets/Snapshoot Portfolio Card1.svg",
     details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
     technologies: ["Html", "Ruby", "CSS", "JavaScript"],
     live_link: "www.google.com",
     source_link: "www.google.com"
   },
   {
     id: 1,
     name: "Multi-Post Stories",
     tag: {sector: "Canopy", type: "Band End Dev", year: 2015},
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
     image: "Assets/Snapshoot Portfolio Card2.svg",
     details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
     technologies: ["Html", "Ruby", "CSS", "JavaScript"],
     live_link: "www.google.com",
     source_link: "www.google.com"
   },
   {
     id: 2,
     name: "Tonic",
     tag: {sector: "Canopy", type: "Band End Dev", year: 2015},
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
     image: "Assets/Snapshoot Portfolio Card3.svg",
     details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
     technologies: ["Html", "Ruby", "CSS", "JavaScript"],
     live_link: "www.google.com",
     source_link: "www.google.com"
   },
   {
     id: 3,
     name: "Multi-Post Stories",
     tag: {sector: "Canopy", type: "Band End Dev", year: 2015},
     description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
     image: "Assets/Snapshoot Portfolio Card4.svg",
     details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
     technologies: ["Html", "Ruby", "CSS", "JavaScript"],
     live_link: "www.google.com",
     source_link: "www.google.com"
   }
 ];
 
 function insertTechList(data) {
   let techList = "";
   data.technologies.map(insertTech);
   function insertTech(data) {
     techList += `<li class="langs">${data}</li>`;
   };
   return techList;
 }
 
 (function loadProjectData() {
   let htmlSkeletonToInsert = "";
   projectData.map(insertData)
   function insertData(data, index) {
     const techList = insertTechList(data)
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
   document.getElementById("portflio").innerHTML = htmlSkeletonToInsert;
 })();
 
 const closeElemPopup = document.getElementsByClassName("clossing-project")[0];
 closeElemPopup.addEventListener("click", closeProjectPopup)
 
 function closeProjectPopup() {
   console.log("clicked");
   document.getElementsByClassName('popup-section')[0].style.display = 'none';
 }
 
 const triggerElem = document.getElementsByClassName("card-btn");
 for (let i = 0; i < triggerElem.length; i += 1){
   triggerElem[i].addEventListener("click", (e) => {openProjectPopup(e)});
 }
 
 function openProjectPopup(e) {
   e.preventDefault();
   console.log(e)
   let targetIndex = e.target.attributes[1].value
   const techList = insertTechList(projectData[targetIndex])
 
   let elemToInsert = `<h3 class="title work-title">
     ${projectData[targetIndex].name}
     </h3>
     <div class="work-info">
     <ul class="work-tag-popup">
         <li class="first-li">CANOPY</li>
         <li class="second-li">Back End Dev</li>
         <li class="second-li">2015</li>
     </ul>
     </div>
     <img src="${projectData[targetIndex].image}" alt="" id="project-popup-image">
     <div class="work-tag-button-wrapper">
     <p class="work-description">
     ${projectData[targetIndex].details}
     </p>
     <div>
     <div class="work-tag">
     <ul class="card-lang">
     ${techList}
     </ul>
     </div>
     <div class="project-link-div project-link-div-sec">
     <a href="${projectData[targetIndex].live_link}" class="project-link live-link" target="_blank">
         See Live
         <img src="./assets/image/line-link-icon.svg" alt="" class="link-link-icon">
         </a>
     <a href="${projectData[targetIndex].live_link}" class="project-link live-link" target="_blank">
         See Source
         <img src="./assets/image/github-source-icon.svg" alt="" class="link-link-icon">
     </a>
     </div>
     </div>
     </div>`
 
   console.log("clicked", targetIndex);
   document.getElementsByClassName('window-wrapper')[0].innerHTML = elemToInsert;
   document.getElementsByClassName('popup-section')[0].style.display = 'block';
 }
 