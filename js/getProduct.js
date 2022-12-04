const baseUrl = "https://rainydays.maritstuderer.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const viewButton = document.querySelector(".view-button");
const id = document.getElementById;

async function getProducts(url, gender, html) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
      if (product.categories[0].name === gender) {
        html(product);
      }
    });
  } catch (error) {
    console.log("An error occured");
  }
}

if (productContainer.id === "mensProducts") {
  getProducts(baseUrl + "?per_page=20", "Men", createHTML);
} else if (productContainer.id === "womansProducts") {
  getProducts(baseUrl + "?per_page=20", "Woman", createHTML);
} else {
  console.log("no produktContainer available");
}

function createHTML(product) {
  productContainer.innerHTML += `<li class="news-item">
  <h2>${product.name}</h2>
  <img src="${product.images[0].src}"/>
  <button
      id="${product.id}"
      class="secondaryButton view-button"
      onclick="window.location.href= '../pages/view-jacket.html?id=${product.id}'"
    > VIEW
    </button>`;
}
