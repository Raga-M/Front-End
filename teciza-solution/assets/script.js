
var pre = document.getElementById("previous");
var next = document.getElementById("next");
pre.addEventListener("click", () => {
  pre.style.transform = "scale(1.2)";
  setInterval(() => {
    pre.style.transform = "scale(1)";
  }, 250);
});
next.addEventListener("click", () => {
  next.style.transform = "scale(1.2)";
  setInterval(() => {
    next.style.transform = "scale(1)";
  }, 250);
});

var swiper = new Swiper(".slider-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
 centerSlider:'true',
 fade:'true',
 grabCursor:'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
