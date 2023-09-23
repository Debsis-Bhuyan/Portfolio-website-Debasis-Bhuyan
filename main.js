/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");
function toggleSkills() {
  let itemclass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemclass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

// SERVICES MODAL ====================*/
const modelViews = document.querySelectorAll(".services_model"),
  modelbtns = document.querySelectorAll(".services_button"),
  modelcloses = document.querySelectorAll(".services_model-close");
let model = function (modelClick) {
  modelViews[modelClick].classList.add("active-model");
};
modelbtns.forEach((modelbtn, i) => {
  modelbtn.addEventListener("click", () => {
    model(i);
  });
});
modelcloses.forEach((modelclose) => {
  modelclose.addEventListener("click", () => {
    modelViews.forEach((modelview) => {
      modelview.classList.remove("active-model");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});



   

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href *=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href *=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll header
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
  const scrollUp=document.getElementById('scroll-up');
  // when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
  if (this.scrollY >= 560)  {
    scrollUp.classList.add('show-scroll');
    
  }
  else scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/


const themeButton = document.getElementById('theme-bottom');
const darkTheme = 'dark-theme';
const iconTheme='uil-sun';

const selectedTheme= localStorage.getItem('selected-theme');
const selectedIcon= localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains('darkTheme')? 'light': 'dark';
const getCurrentIcon = () => document.body.classList.contains('iconTheme')? 'uil-sun': 'uil-moon';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark'? 'add': 'remove'](darkTheme);
  // themeButton.classList[selectedIcon === 'uil-moon'? 'add':'remove'](iconTheme);
}
if(selectedTheme){
  document.body.classList[selectedTheme === 'dark'? 'add': 'remove'](darkTheme);

  if(selectedIcon === 'uil-sun'){
    themeButton.classList.remove('uil-sun');
    themeButton.classList.add('uil-moon');
  }
  else{
    themeButton.classList.add('uil-sun');
    // themeButton.classList.remove('uil-moon');
  }
}
themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})
// movement of typejs

var typed = new Typed("#element", {
  strings: ["Programmer.","Developer. ","Student."],
  typeSpeed: 50,
  loop:true,
});