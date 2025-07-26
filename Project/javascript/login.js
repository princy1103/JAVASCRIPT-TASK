import usermethod from "../api/user.js";
import navbar from "../components/navbar.js";
import { getValue } from "../utils/helpers.js";
document.getElementById("navbar").innerHTML=navbar();
const handlelogin=async(user)=>{
    let res = await usermethod.login(user);
    console.log(res);
    if (res.length == 0) {
      alert("invalid email or password !");
    } else {
      alert("Login Successfuly..");
    localStorage.setItem("isloggedIn",true);
    localStorage.setItem("user",JSON.stringify(res[0]));
    window.location.href="/";
    }
};
const onSubmit=(e)=>{
    e.preventDefault();
    let user={
        email:getValue("email"),
        password:getValue("password"),
    }
    handlelogin(user);
};
document.getElementById("user").addEventListener("submit",onSubmit);