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

ButtonHero.addEventListener("click", function() {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonWhyWe = document.getElementById("why-we_btn");

ButtonWhyWe.addEventListener("click", function() {
  var element = document.getElementById("header");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonImage = document.getElementById("image_btn");

ButtonImage.addEventListener("click", function() {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});