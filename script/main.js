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
  text.style.opacity = `${1 - window.scrollY / 400}`;
  text.style.top = `${(window.scrollY / 400) * 500}px`;
});

const links = document.querySelectorAll(".link");
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
