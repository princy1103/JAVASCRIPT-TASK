
import { productmethods } from "../api/Product.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const loadProduct = async () => {
  const products = await productmethods.getAll();
  const product = products.find(p => p.id == productId);

  if (!product) {
    alert("Product not found");
    return;
  }

  document.getElementById("productname").value = product.title;
  document.getElementById("price").value = product.price;
  document.getElementById("description").value = product.desc;
  document.getElementById("category").value = product.category;
  document.getElementById("productimg").value = product.img;
};

loadProduct();

document.getElementById("editForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedProduct = {
    title: document.getElementById("productname").value,
    price: document.getElementById("price").value,
    desc: document.getElementById("description").value,
    category: document.getElementById("category").value,
    img: document.getElementById("productimg").value,
  };

  await productmethods.update(productId, updatedProduct);
  alert("Product updated!");
  location.replace("Products.html");
});


