// menu desktop desplegable
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// menu mobile 
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//menu carritoIcon
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
//contenedor de los productos 
const cardsContainer = document.querySelector(".cards-container")


// funcion menu desktop
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){

    const asideClosed = aside.classList.contains("inactive");

    if (!asideClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

//funcion menu mobile
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    const asideClosed = aside.classList.contains("inactive");

    if (!asideClosed){
        aside.classList.add("inactive");
}
   
    mobileMenu.classList.toggle("inactive");
}

// funcion del aside del carrito
menuCarrito.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");
   
    if (!mobileMenuClosed || !desktopMenuClosed){
      mobileMenu.classList.add("inactive");
      desktopMenu.classList.add("inactive");
     }

   aside.classList.toggle("inactive");    
}

const productsList = [];

productsList.push({
    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


productsList.push({
    name: "Smart TV",
    price: 420,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


productsList.push({
    name: "PlayStation5",
    price: 520,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


productsList.push({
    name: "Laptop HP",
    price: 640,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


function renderProducts(arr){
    for (product of productsList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const productImg = document.createElement("img")
        productImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImg)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(productsList);