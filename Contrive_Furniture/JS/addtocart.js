const getValue = (id) => {
    return document.getElementById(id).value;
};
// let products = JSON.parse(localStorage.getItem("products"))||[];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const products = [
    {
        id: 1,
        image: "../IMG/product-1.png",
        title:"Table",
        name: "Rustic Farmhouse Dining Table",
        price: 48.00,
    },
    {
        id: 2,
        image: "../IMG/slider-img3.png",
        name: "Mid-Century Modern Sofa",
        price: 67.00,

    },
    {
        id: 3,
        image: "../IMG/product-3.png",
        name: "Luxury Living Dresser CupBoard",
        price: 34.00,

    },
    {
        id: 4,
        image: "../IMG/product-4.png",
        name: "Industrial-Style Accent Chair",
        price: 26.00,
    },
    {
        id: 5,
        image: "../IMG/product-5.png",
        name: "Versatile Storage Ottoman",
        price: 42.00,
    },
    {
        id: 6,
        image: "../IMG/product-6.png",
        name: "Top rated Elegant Floor Lamp ",
        price: 39.00,

    }
];
const container = document.getElementById('product-container');
  products.forEach(product=> {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <h4>${product.title}</h4>
      <p>Price: $${product.price.toFixed(2)}</p>
      <a href="addToCart.html">Add to Cart</a>
    `;
    container.appendChild(div);
});

// searching

const search = (value) => {
  let temp = products.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  renderProducts(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = getValue("search");
  // console.log("value: " + value);
  search(value);
});
