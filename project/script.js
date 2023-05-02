const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".nav");
const list = document.querySelectorAll(".nav ul li a");
// console.dir(list);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
icon.addEventListener("click", () => {
  icon.classList.toggle("show");
});
list.forEach((item) => {
  item.addEventListener("click", () => {
    // console.log("click");
    hamburger.classList.toggle("active");
  });
});
