import { productmethods } from "../api/Product.js";
const getValue = (id) => document.getElementById(id)?.value?.trim();


const handlesubmit=(e)=>{
    e.preventDefault(); 
    const product={
        title:getValue("productname"),
        price:getValue("price"),
        desc:getValue("description"),
        category:getValue("category"),
        img:getValue("productimg"),
    };
    productmethods.post(product);
    alert("Product addedd")
};
document.getElementById("addproduct").addEventListener("submit",handlesubmit)