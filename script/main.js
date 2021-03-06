const text = document.getElementById("large-logo");
const elements = document.querySelectorAll(".scroll-anim");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 1600) {
    text.style.opacity = `${1 - window.scrollY / 200}`;
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
  if (window.scrollY >= 1800 && window.scrollY <= 5000) {
    var paddingLeft = 3000;
    part_1.style.paddingLeft = `${paddingLeft - window.scrollY}px`;
    part_2.style.paddingRight = `${paddingLeft - window.scrollY}px`;
  }
});

document.querySelectorAll(".images").forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.classList.toggle("cursor-img");
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.toggle("cursor-img");
  });
});

// function update(e) {
//   var x = e.clientX || e.touches[0].clientX;
//   var y = e.clientY || e.touches[0].clientY;

//   document.documentElement.style.setProperty("--cursorX", x + "px");
//   document.documentElement.style.setProperty("--cursorY", y + "px");
// }

// document.querySelector(".social").addEventListener("mousemove", update);
// document.querySelector(".social").addEventListener("touchmove", update);

const project = document.querySelectorAll(".project");

// project.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     const images = [
//       "gamebase.png",
//       "blogsite.png",
//       "aromaMocha.png",
//       "numerical.png",
//       "",
//       "skillbadges.jpg",
//     ];
//     images.forEach((image) => {
//       if (element.classList[1] == image.split(".")[0]) {
//         var x = document.getElementById("project-main");
//         x.style.background = `url(./elements/${image})`;
//         x.style.backgroundPosition = "center";
//         x.style.backgroundSize = "cover";
//         x.style.backgroundRepeat = "no-repeat";
//       }
//     });
//   });
//   element.addEventListener("mouseleave", () => {
//     document.getElementById("project-main").style.background = "";
//   });
// });

// function search(event) {
//   var torch = document.getElementsByClassName("social")[0];
//   torch.style.clipPath = `circle(80px at ${event.pageX}px ${
//     event.pageY - 1958.4000244140625
//   }px)`;
//   console.log(
//     event.pageX,
//     event.pageY - 1958.4000244140625 - 431.5999755859375 + 26
//   );
// }

var pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  {
    pos.style.setProperty("--x", e.clientX + "px");
  }
  {
    pos.style.setProperty("--y", e.clientY + "px");
  }
});

// document.querySelector(".social").addEventListener("mouseover", () => {
//   cursor.style.display = "none";
// });
// document.querySelector(".social").addEventListener("mouseleave", () => {
//   cursor.style.display = "block";
// });

const close = document.getElementById("close");
const nav = document.querySelector(".top-nav");
const ham = document.getElementById("hamburger");

ham.addEventListener("click", () => {
  nav.classList.toggle("nav-close");
});
close.addEventListener("click", () => {
  nav.classList.toggle("nav-close");
});

document.querySelectorAll(".hover").forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    document.querySelector(".background-nav").innerText = ele.classList[1];
  });
});
document.querySelectorAll(".hover").forEach((ele) => {
  ele.addEventListener("mouseleave", () => {
    document.querySelector(".background-nav").innerText = "";
  });
});
