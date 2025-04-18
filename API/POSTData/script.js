const getvalue = (id) => {
    return document.getElementById(id).value
}
//for update
const setvalue = (id,value) => {
    document.getElementById(id).value=value
}
let id=-1;
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
const update = async (data) => {
    let req = await fetch(`http://localhost:3000/products/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let res = await req.json();

};
const handlesubmit=(e)=>{
    e.preventDefault();
    let products={
        title:getvalue("title"),
        price:getvalue("price"),
        description:getvalue("description"),
        img:getvalue("img")
    };
    // console.log(products);
    if(id==-1)
    {
        create(products);
    }
    else
    {
        update(products);
    }
};
document.getElementById("productsItems").addEventListener("submit",handlesubmit);
//for get data
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
//for delete data from ui
const deleteData=async(id)=>{
    await fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE",
    })
}
//updata product
const addToform=(data)=>{
    //console.log(data)
    //1st method to update
    setvalue("title",data.title);
    setvalue("price",data.price);
    setvalue("description",data.description)
    setvalue("img",data.img)
    setvalue("type","update")
    id=data.id
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
        let updatebtn=document.createElement("button")
        updatebtn.innerHTML="Update"
        updatebtn.addEventListener("click",()=>addToform(product))
        let section=document.createElement("section")
        section.append(img,title,price,description,dltbtn,updatebtn)
        document.getElementById("container").append(section)
    })
};
