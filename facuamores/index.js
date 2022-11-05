let icon = document.getElementById("lightDarkMode");
let body = document.getElementById("body");
let header = document.getElementById("header");

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
