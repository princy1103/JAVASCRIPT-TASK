import { productmethods } from "../api/product.js";
import navbar from "../components/navbar.js";
import { getValue, isloggedIn } from "../utils/helpers.js";

document.getElementById("navbar").innerHTML=navbar();
isloggedIn();

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
