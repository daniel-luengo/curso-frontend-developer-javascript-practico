

/* Cambio de clase para mostrar u ocultar el menu*/ 
// const menuEmail =  document.querySelector(".navbar-email")
// const desktopMenu = document.querySelector (".desktop-menu")

// menuEmail.addEventListener("click", toggleDesktopMenu);

// function toggleDesktopMenu () {
//     desktopMenu.classList.toggle('inactive');

// }












/*Menu click enlace de correo*/
const enlaceClick = document.querySelector('.navbar-email');
const menuCambio = document.querySelector('.desktop-menu');

/* Menu click mobile Hamburguesa*/
const menuMobileClick = document.querySelector('.menu');
const menuCambioClase = document.querySelector('.mobile-menu ')

 
/* Menu click carrito de compra*/
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const seleccionesCarrito = document.querySelector('.product-detail');



enlaceClick.addEventListener('click', cambioClase);
menuMobileClick.addEventListener('click', cambioClase2);
menuCarritoIcon.addEventListener('click', aparecerCompras);



/* Funcion  enlace de correo*/

function cambioClase() {
    const isMenuCarritoclosed = seleccionesCarrito.classList.contains('inactive');
    if (isMenuCarritoclosed == true ) {
        menuCambio.classList.toggle('inactive')
    } else {
        seleccionesCarrito.classList.add('inactive');
        menuCambio.classList.toggle('inactive')
    }

    
  } 


/* Funcion  mobile Hamburguesa*/
function cambioClase2() {
    const isMenuCarritoclosed = seleccionesCarrito.classList.contains('inactive');
    if (isMenuCarritoclosed ==true) {
         menuCambioClase.classList.toggle('inactive')
    } else {
    seleccionesCarrito.classList.add('inactive')
    menuCambioClase.classList.toggle('inactive')
    }
} 

/* Funcion  carrito de compra*/
function aparecerCompras() {
    const isMenuHamburguersaClosed = menuCambioClase.classList.contains('inactive');
    if (isMenuHamburguersaClosed == true) {
    seleccionesCarrito.classList.toggle('inactive')
} else {
    menuCambioClase.classList.add('inactive')
    seleccionesCarrito.classList.toggle('inactive')
}
}


const productList = [];

productList.push({
    nombre: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Pantalla',
    precio: 3000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Computador',
    precio: 55000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


for (product of productList) {
 
}