import { getProducts, addToCart, deleteProduct } from "../api/product.js";

async function loadProducts() {
  const products = await getProducts();
  const tbody = document.getElementById("productTableBody");

  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${product.image}" width="60" /></td>
      <td>${product.name}</td>
      <td>$${product.price}</td>
      <td>
          <button class="add-to-cart">Add to Cart</button>
          <button class="delete-product">Delete</button>
      </td>`;
    row.querySelector("button").addEventListener("click", () => {
      addToCart(product);
      alert("Added to cart!");
    });
    row.querySelector(".delete-product").addEventListener("click", async () => {
      const confirmDelete = confirm("Are you sure you want to delete this product?");
      if (confirmDelete) {
        await deleteProduct(product.id);
        loadProducts();
      }
    });
    tbody.appendChild(row);
  });
}

loadProducts();
