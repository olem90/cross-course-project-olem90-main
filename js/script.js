const baseUrl = "https://gamehub.olemariusrognan.com/wp-json/wc/store/products"; 

const productContainer = document.querySelector(".column-wrapper");
const gameCategories = document.querySelectorAll(".categories");

async function getProducts(url){
        const response = await fetch(url);
        const products = await response.json();
        
        products.forEach(function(product){
            let price = product.prices.price;
            const divider = 100;

            const rightPrice = price / divider;

            productContainer.innerHTML += 
            `<div class="games-cover">
            <h4>${product.name}</h4>
            <div class=""><a href="game-description.html?id=${product.id}">
            <img src="${product.images[0].src}">
            <p>$${rightPrice}</p></a></div>
            </div>`;
        })};
    
            getProducts(baseUrl);



        
    
    
    
  
            
    