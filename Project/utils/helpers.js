export const getValue = (id) => document.getElementById(id).value;

export const isloggedIn=()=>{
    let logged=localStorage.getItem("isloggedIn")||false;
    if(!logged){
        window.location.href="/pages/login.html";
    }
};  