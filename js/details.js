const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)
const paramsCat = new URLSearchParams()
const descriptionContainer = document.querySelector(".description-section");

const url = "https://gamehub.olemariusrognan.com/wp-json/wc/store/products/" + id;

async function getDetails(){
    
    const response = await fetch(url);
    const details = await response.json();
    
    createHTML(details);
}

getDetails();

function createHTML(details){
    let price = details.prices.price;
    const divider = 100;
    const rightPrice = price / divider;

    descriptionContainer.innerHTML = 
    `<div class="description-section">
    <h2>${details.name}</h2>
    <div class="description-img-container">
    <img class="game-description-img" src="${details.images[0].src}">
    <p class="product-price">$${rightPrice}</p></div>
    <div class="button-container">
    <div class="cta add-to-cart-button">
        <a href="#">Add to Cart</a>
    </div>
    <div class="cta wish-list-button">
        <a href="#">Add to Wishlist</a>
    </div>
    </div>
    <div class="description-text-container">
    <p>${details.description}</p></div></div>`;
};