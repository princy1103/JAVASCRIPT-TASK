const uiMaker = (data) => {
    let temp = "";
    for (let i = 0; i <= 10; i++) {
      temp += `<div class="box">
        <img
          src=${data[i].thumbnail}
          alt=""
          class="ProductImg"
        />
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
        <p class="price">$${data[i].price}</p>
        <button>Add TO Cart</button>
      </div>`;
    }
    document.getElementById("container").innerHTML = temp;
  };
  const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    // console.log(res)
    uiMaker(res.products);
  };
  getData();