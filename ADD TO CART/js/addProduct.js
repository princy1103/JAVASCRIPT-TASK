const API_URL = "http://localhost:3000/products";

document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value;

  const newProduct = { name, price, image };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    alert("Product added!");
    e.target.reset();
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Failed to add product");
  }
});
