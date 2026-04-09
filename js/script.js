const cart = document.querySelector(".cart");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".fa-xmark");
const cartCounter = document.querySelector(".cart__counter");


const cartIcon = document.querySelector(".header").childNodes[5];
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("cart_show");
})

const menuIcon = document.querySelector(".header").childNodes[1];
menuIcon.addEventListener("click", () => {
    menu.classList.add("menu_show");
})

closeMenu.addEventListener("click", ()=>{
    menu.classList.remove("menu_show");
})


const productsCart = document.querySelectorAll(".products__cart");

productsCart.forEach((element) => {
    element.addEventListener("click", () => {
        const src = element.parentElement.getAttribute("data-src");
        const dataAlt = element.parentElement.getAttribute("data-alt");
        const price = element.parentElement.innerText;
        const name = element.parentElement.getAttribute("data-name");
        cart.insertAdjacentHTML('beforeend', `
            <div class="cart__content">
                <img class="cart__images" src=${src} alt="${dataAlt}">
                <p class="cart--margin">${price}</p>
                <p class="cart__item cart--margin">${name}</p>
                <i class="cart__remove"><img src="imgs/quitar.png" alt="Quitar" class="cart__deleteicon"></i>
            </div>`)
        cartCounter.innerText = (cart.childElementCount - 1)
        let iconRemove = document.querySelectorAll(".cart__remove");
        iconRemove.forEach((element) => {
        element.addEventListener("click", () =>{
        element.parentElement.remove();
        cartCounter.innerText = (cart.childElementCount - 1)
        })
        } );
    })
} );