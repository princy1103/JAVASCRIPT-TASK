import { getCartItems } from "../api/product.js";

async function loadCart() {
  const cartItems = await getCartItems();
  const tbody = document.getElementById("cartTableBody");

  cartItems.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" width="60" /></td>
      <td>${item.name}</td>
      <td>$${item.price}</td>
    `;
    tbody.appendChild(row);
  });
}

loadCart();
