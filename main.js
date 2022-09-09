

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
const cardsContainer = document.querySelector('.cards-container');


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
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    precio: 3000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    precio: 55000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/



for (products of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
   
    const productImg = document.createElement('img');
    productImg.setAttribute('src' , products.image);

    productCard.appendChild(productImg);
   

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + products.precio;
    

    const productName = document.createElement('p');   
    productName.innerText = products.name;

    productInfo.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);
cardsContainer.appendChild(productCard);


}