// header
function showsidebar() {
    const sidebar = document.getElementById("sidebar")
    sidebar.style.display = "flex"
}
function hidesidebar() {
    const sidebar = document.getElementById("sidebar")
    sidebar.style.display = "none"
}
// sign up
let users = JSON.parse(localStorage.getItem("users")) || [];
const isExist = (email) => {
    return users.some((user) => user.email === email);
};
// Signup function
const handleSignup = (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("signup-name").value,
        email: document.getElementById("signup-email").value,
        password: document.getElementById("signup-password").value
    };
    if (isExist(user.email)) {
        alert("User already exists!");
        return;
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Created Successfully!");
    document.getElementById("signup").reset();
};
// Login function
const handleLogin = (e) => {
    e.preventDefault();
    users = JSON.parse(localStorage.getItem("users")) || [];
    let loginemail = document.getElementById("login-email").value;
    let loginpassword = document.getElementById("login-password").value;
    let loginuser = users.find((user) => user.email === loginemail);
    if (!loginuser) {
        alert("Email is incorrect!");
    } else if (loginuser.password !== loginpassword) {
        alert("Password is incorrect!");
    } else {
        alert(`Welcome back, ${loginuser.name}!`);
    }
    document.getElementById("login").reset();
};
if (document.getElementById("signup")) {
    document.getElementById("signup").addEventListener("submit", handleSignup);
}

if (document.getElementById("login")) {
    document.getElementById("login").addEventListener("submit", handleLogin);
}










