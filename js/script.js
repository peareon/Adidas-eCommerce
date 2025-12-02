const cart = document.querySelector(".cart");

const iconRemove = document.querySelectorAll(".cart__remove");
iconRemove.forEach((element) => {
    element.addEventListener("click", () =>{
        element.parentElement.remove();
    })
} );

const cartIcon = document.querySelector(".header").childNodes[5];
cartIcon.addEventListener("click", () => {
    console.log("clickeed")
    console.log(cart)
    cart.classList.toggle("cart_show");
})

const productsCart = document.querySelectorAll(".products__cart");
productsCart.forEach((element) => {
    element.addEventListener("click", () => {
        console.log(element);
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
    })
} )