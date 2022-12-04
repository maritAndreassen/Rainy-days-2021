const baseUrl = "https://rainydays.maritstuderer.one/wp-json/wc/store/products";
const productDetails = document.querySelector(".view-jacket-container");
const viewButton = document.querySelector(".view-button");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const product = await response.json();

    createDetailHTML(product);
  } catch (error) {
    console.log("An error occured");
  }
}

function getProductDetails() {
  const id = window.location.href.split("=")[1];
  console.log(id);
  const detailProductUrl = `${baseUrl}/${id}`;
  console.log(detailProductUrl);
  getProducts(detailProductUrl, "Woman", createDetailHTML);
}

getProductDetails();

function createDetailHTML(product) {
  productDetails.innerHTML += `
  <picture id="productImg" class="view-jacket-img">
    <img src="${product.images[0].src}"/>
    </picture> 
    <div class="view-jacket-text-field">
    <h1>${product.name}</h1>
    <p>${product.prices.currency_code} ${product.prices.price}</p>
    ${product.description}
    <button
    class="primaryButton"
    onclick="window.location.href='../pages/shopping-cart.html'"
  >
    ADD TO CART
  </button>
</div>`;
}
