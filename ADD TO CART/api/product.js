const API_URL = "http://localhost:3000";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function addProduct(product) {
  await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
}

export async function addToCart(product) {
  await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
}

export async function getCartItems() {
  const res = await fetch(`${API_URL}/cart`);
  return res.json();
}
export async function deleteProduct(id) {
  await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE"
  });
}