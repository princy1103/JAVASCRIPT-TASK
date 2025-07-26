import { productmethods } from "../api/Product.js";

const container = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortPrice = document.getElementById("sortPrice");
const filterCategory = document.getElementById("filterCategory");

const ListOfProduct = async () => {
  let products = await productmethods.getAll();

  // searching
  const searchValue = searchInput.value.toLowerCase().trim();
  if (searchValue) {
    products = products.filter(p =>
      p.title.toLowerCase().includes(searchValue)
    );
  }

  // Filter
  const selectedCategory = filterCategory.value;
  if (selectedCategory) {

    products = products.filter(p => p.category.toLowerCase() == selectedCategory.toLowerCase());
  }

  //  Sorting
  const sortValue = sortPrice.value;
  if (sortValue === "high") {
    products.sort((a, b) => b.price - a.price);
  } else if (sortValue === "low") {
    products.sort((a, b) => a.price - b.price);
  }

  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const editBtn = document.createElement("a");
    editBtn.href = `../Pages/editProduct.html?id=${product.id}`;
    editBtn.innerHTML = `<button class="edit-btn">Edit</button>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Product";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";

    deleteBtn.addEventListener("click", async () => {
      const confirmDelete = confirm("Are you sure?");
      if (!confirmDelete) return;

      try {
        await productmethods.delete(product.id);
        alert("Deleted!");
        ListOfProduct();
      } catch (err) {
        alert("Delete failed");
        console.error(err);
      }
    });

    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" width="100" />
      <h3>${product.title}</h3>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p>${product.desc}</p>
    `;

    card.appendChild(editBtn);
    card.appendChild(deleteBtn);
    container.appendChild(card);
  });
};

searchInput.addEventListener("input", ListOfProduct);
sortPrice.addEventListener("change", ListOfProduct);
filterCategory.addEventListener("change", ListOfProduct);

ListOfProduct();
