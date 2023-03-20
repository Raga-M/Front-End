const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile = document.querySelector(".header .nav-bar .nav-list ul");
const menu = document.querySelectorAll(".header .nav-bar .nav-list ul a");
const header = document.querySelector(".header.container");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile.classList.toggle("active");
});
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
menu.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  var reveals = document.querySelectorAll(".reveal");
  for (i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint =150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
