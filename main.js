

/* Cambio de clase para mostrar u ocultar el menu*/ 
// const menuEmail =  document.querySelector(".navbar-email")
// const desktopMenu = document.querySelector (".desktop-menu")

// menuEmail.addEventListener("click", toggleDesktopMenu);

// function toggleDesktopMenu () {
//     desktopMenu.classList.toggle('inactive');

// }













const enlaceClick = document.querySelector('.navbar-email');
const menuCambio = document.querySelector('.desktop-menu');

const menuMobileClick = document.querySelector('.menu');
 const menuCambioClase = document.querySelector('.mobile-menu ')


enlaceClick.addEventListener('click', cambioClase);
menuMobileClick.addEventListener('click', cambioClase2);


function cambioClase() {
    menuCambio.classList.toggle('inactive')
  

} 

function cambioClase2() {
 
    menuCambioClase.classList.toggle('inactive-2')

} 






const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const seleccionesCarrito = document.querySelector('.product-detail');


menuCarritoIcon.addEventListener('click', aparecerCompras);


function aparecerCompras() {
    seleccionesCarrito.classList.toggle('inactive')
}