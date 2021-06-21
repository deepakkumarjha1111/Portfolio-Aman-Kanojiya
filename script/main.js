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
  element.addEventListener("mouseleave", () => {
    cursor.classList.toggle("cursor-img");
  });
});

function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.querySelector(".social").addEventListener("mousemove", update);
document.querySelector(".social").addEventListener("touchmove", update);

const project = document.querySelectorAll(".project");

project.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const images = [
      "gamebase.png",
      "blogsite.png",
      "aromaMocha.png",
      "numerical.png",
      "",
      "skillbadges.jpg",
    ];
    images.forEach((image) => {
      if (element.classList[1] == image.split(".")[0]) {
        var x = document.getElementById("project-main");
        x.style.background = `url(./elements/${image})`;
        x.style.backgroundPosition = "center";
        x.style.backgroundSize = "cover";
        x.style.backgroundRepeat = "no-repeat";
      }
    });
  });
  element.addEventListener("mouseleave", () => {
    document.getElementById("project-main").style.background = "";
  });
});
