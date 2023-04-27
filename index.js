const iconoMenu = document.querySelector("#icono_menu");
const menu = document.getElementById("elem_menu");
const icon = document.getElementById("lightDarkMode");
const body = document.getElementById("body");
const header = document.getElementById("header");

//Change the color of the WebPage------------------------------------------------------------//

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./img/moon.png";
  } else {
    icon.src = "./img/sunLogo.png";
  }
};

body.addEventListener("", () => {});

//Library for scroll animations---------------------------------------------------------------//

AOS.init({
  duration: 800,
});

//Menu----------------------------------------------------------------//

iconoMenu.addEventListener("click", (e) => {
  menu;
});
