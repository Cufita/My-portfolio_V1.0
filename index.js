const iconoMenu = document.querySelector("#icono_menu");
const menu = document.getElementById("elem_menu");
const icon = document.getElementById("lightDarkMode");
const body = document.getElementById("body");
const header = document.getElementById("header");
const footerTitle = document.getElementById("footer_h5");

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

//iconoMenu.addEventListener("click", (e) => {
//  menu;
//});

//GET IN TOUCH-------------------------//

// Define una función que se ejecutará cuando cambie el tamaño de la pantalla
function cambiarTitulo() {
  if (
    screen.width < 1200
      ? (footerTitle.textContent = "Get in touch")
      : (footerTitle.textContent = "If you want to be in contact with me")
  );
}

// Ejecuta la función cambiarTitulo cuando cambie el tamaño de la pantalla
window.addEventListener("resize", cambiarTitulo);

// Llama a la función cambiarTitulo por primera vez para aplicar los cambios según el tamaño de la pantalla
cambiarTitulo();
