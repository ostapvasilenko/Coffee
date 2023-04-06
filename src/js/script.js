/* Mobile Menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  //   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
}))



/* Swiper slider */

let swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Scroll buttons */


let ButtonHero = document.getElementById("btn_hero");

ButtonHero.addEventListener("click", function () {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonWhyWe = document.getElementById("why-we_btn");

ButtonWhyWe.addEventListener("click", function () {
  var element = document.getElementById("header");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonImage = document.getElementById("image_btn");

ButtonImage.addEventListener("click", function () {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


/* Registartion form modal */

const registrationBtn = document.querySelector('.header__btn');
const registrationFormWrapper = document.querySelector('.header__form-wrapper');

registrationBtn.addEventListener('click', () => {
  registrationFormWrapper.style.display = 'block';
});

registrationFormWrapper.addEventListener('click', (event) => {
  if (event.target === registrationFormWrapper) {
    registrationFormWrapper.style.display = 'none';
  }
});



var myButton = document.getElementById("discover__btn");
var myPopup = document.getElementById("discover__popup");
var closeButton = document.getElementById("discover__close_button");

// показуємо вікно з інформацією при натисканні на кнопку
myButton.addEventListener("click", function() {
  myPopup.style.display = "block";
});

// закриваємо вікно при натисканні на кнопку "Закрити вікно"
closeButton.addEventListener("click", function() {
  myPopup.style.display = "none";
});

myButton.addEventListener("click", function() {
  myPopup.classList.add("show");
});

// закриваємо вікно при натисканні на кнопку "Закрити вікно"
closeButton.addEventListener("click", function() {
  myPopup.classList.remove("show");
  myPopup.classList.add("hide");
  
  // зачекайте 0,3 секунди, поки анімація закінчиться, тоді приховайте вікно
  setTimeout(function() {
    myPopup.classList.remove("hide");
  }, 500);
});