// --------------fade in animation for main-----------
// let text = document.getElementById("main_text");
// $(document).ready(function () {
//   $(window).scroll(function () {
//     $("#large-logo").css("opacity", 1 - $(window).scrollTop() / 400);
//     $("#large-logo").css("margin-top", ($(window).scrollTop() / 400) * 500);
//     // console.log($(window).scrollTop()/400)*500 , 1- $(window).scrollTop() / 400
//   });
// });
const text = document.getElementById("large-logo");
const elements = document.querySelectorAll(".scroll-anim");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 1600) {
    text.style.opacity = `${1 - window.scrollY / 400}`;
    text.style.top = `${(window.scrollY / 400) * 500}px`;
  }
});

const links = document.querySelectorAll(".link");
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

const part_1 = document.getElementById("para-1");
const part_2 = document.getElementById("para-2");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 2500 && window.scrollY <= 6000) {
    var paddingLeft = 4000;
    part_1.style.paddingLeft = `${paddingLeft - window.scrollY}px`;
    part_2.style.paddingLeft = `${paddingLeft - window.scrollY}px`;
  }
});

document.querySelectorAll(".images").forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.classList.toggle("cursor-img");
  });
});
