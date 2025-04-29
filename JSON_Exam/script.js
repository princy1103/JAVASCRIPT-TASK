let products = [];

const getvalue = (id) => {
    return document.getElementById(id).value;
};

// function to create a new product
const create = async (data) => {
    let req = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let res = await req.json();
    console.log(res);
};

// for get data on UI
const uimaker = (productsArray) => {
    const container = document.getElementById("container");
    container.innerHTML = "";

    productsArray.forEach((product) => {
        let title = document.createElement("h2");
        title.innerHTML = product.title;

        let price = document.createElement("h2");
        price.innerHTML = product.price;

        let description = document.createElement("p");
        description.innerHTML = product.description;

        let img = document.createElement("img");
        img.src = product.img;
        img.alt = product.title;

        let section = document.createElement("section");
        section.append(img, title, price, description);

        container.append(section);
    });
};

// function to fetch data
const getData = async () => {
    try {
        let req = await fetch("http://localhost:3000/product");
        let res = await req.json();
        products = res;
        uimaker(products);
    } catch (error) {
        console.log(error.message);
    }
};
getData(); 

// function for search
const handlesearch = (val) => {
    let temp = products.filter((ele) =>
        ele.title.includes(val)
    );
    uimaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
    let val = document.getElementById("search").value;
    handlesearch(val);
});

// function to filter by category
const FilterByCategory = (category) => {
    if (category == "all" || category == "") {
        uimaker(products);
    } else {
        let temp = products.filter((ele) => ele.category.toLowerCase() == category.toLowerCase());
        uimaker(temp);
    }
};

// event listener for dropdown select
document.getElementById("category").addEventListener("change", () => {
    let val = document.getElementById("category").value;
    FilterByCategory(val);
});

// event listeners for buttons
document.getElementById("all").addEventListener("click", () => FilterByCategory("all"));
document.getElementById("chair").addEventListener("click", () => FilterByCategory("chair"));
document.getElementById("lamp").addEventListener("click", () => FilterByCategory("lamp"));
document.getElementById("table").addEventListener("click", () => FilterByCategory("table"));
document.getElementById("sofa").addEventListener("click", () => FilterByCategory("sofa"));

//sorting
const sorting = (orderBy) => {
    if (orderBy == "lth") {
      let temp = products.sort((a, b) => a.price - b.price);
      uimaker(temp);
    } else {
      let temp = products.sort((a, b) => b.price - a.price);
      uimaker(temp);
    }
  };
  document.getElementById("lth").addEventListener("click", () => sorting("lth"));
  
  document.getElementById("htl").addEventListener("click", () => sorting("htl"));