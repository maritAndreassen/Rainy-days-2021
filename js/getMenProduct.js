const baseUrl = "https://rainydays.maritstuderer.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
      if (product.categories[0].name === "Men") {
        createHTML(product);
      }
    });
  } catch (error) {
    console.log("An error occured");
  }
}

getProducts(baseUrl);

function getProduct(product) {}

function createHTML(product) {
  productContainer.innerHTML += `<li class="news-item">
  <div class="product"><h2>${product.name}</h2>
  <img src="${product.images[0].src}"/>
  </div> 
  <div class="text-field">
          <button
            id="view-button"
            class="secondaryButton"
            
          >
            VIEW
          </button>
          <a class="open-modal" data-open="addFavourite" aria-label="heart icon for favourites">
            <i class="far fa-heart"></i
          ></a>
          <div class="modal" id="addFavourite">
            <section class="modal-dialog">
              <i class="fas fa-heart" aria-hidden></i>
              <h2>Chosen jacket added to favourites</h2>
              <button class="primaryButton" data-close>Ok</button>
              <button
                class="primaryButton"
                onclick="window.location.href='../pages/favourites.html'"
              >
                Go to favourites
              </button>
            </section>
          </div></li>`;
}
