function getIt () {
  const apiKey = "ZcLKnh1pUAzH3DNO64glYWZ9494pa3P6aN3VBdd2";
  const apiUrl = 'https://api.printful.com/orders';

  console.log(`Bearer ${apiKey}`);
async function fetchProducts() {
  fetch(`${apiUrl}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      Authorization: `Bearer ${btoa(apiKey)}`,
      Connection: `keep-alive`,
      Accept: `*/*`,
    },
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response into JSON
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}


  function displayProducts(products) {
    const productsList = document.getElementById("products-list");

    products.forEach(function (product) {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.sync_product.thumbnail_url}" alt="${product.name}">
                <p>Price: $${product.sync_product.retail_price}</p>
            `;
      productsList.appendChild(productElement);
    });
  }

  fetchProducts();
}
