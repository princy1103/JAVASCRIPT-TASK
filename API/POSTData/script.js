const getvalue = (id) => {
    return document.getElementById(id).value
}
const create = async (data) => {
    let req = await fetch("http://localhost:3000/products",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let res = await req.json();
    console.log(res);
};
//for get data
const handlesubmit=(e)=>{
    e.preventDefault();
    let products={
        title:getvalue("title"),
        price:getvalue("price"),
        description:getvalue("description"),
        img:getvalue("img")
    };
    create(products);
    console.log(products);
};
document.getElementById("productsItems").addEventListener("submit",handlesubmit);
const getData = async () => {
    try{
        let req = await fetch("http://localhost:3000/products");
        let res = await req.json();
        console.log(res)
        uimaker(res);
    }
    catch(error){
        console.log(error.message);
    }
  };
getData();
const deleteData=async(id)=>{
    await fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE",
    })
}
//map data 
const uimaker=(products)=>{
    products.map((product)=>{
        let title=document.createElement("h2")
        title.innerHTML=product.title
        let price=document.createElement("h2")
        price.innerHTML=product.price
        let description=document.createElement("p")
        description.innerHTML=product.description
        let img=document.createElement("img")
        img.src=product.img
        let dltbtn=document.createElement("button")
        dltbtn.innerHTML="Delete"
        dltbtn.addEventListener("click",()=>deleteData(product.id))
        let section=document.createElement("section")
        section.append(img,title,price,description,dltbtn)
        document.getElementById("container").append(section)
    })
};
