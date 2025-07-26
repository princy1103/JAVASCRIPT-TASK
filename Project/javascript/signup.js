import usermethod from "../api/user.js";
import navbar from "../components/navbar.js";
import { getValue, isloggedIn } from "../utils/helpers.js";
document.getElementById("navbar").innerHTML = navbar();

const OnSubmit = (e) => {
    e.preventDefault();
    let user = {
        name: getValue("name"),
        email: getValue("email"),
        password: getValue("password"),
    };
    usermethod.create(user)
    isloggedIn(user)
};
// console.log(onSubmit());

document.getElementById("user").addEventListener("submit", OnSubmit);