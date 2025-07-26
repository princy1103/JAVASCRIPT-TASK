const navbar = () => {
  let isloggedIn = localStorage.getItem("isloggedIn") || false;
  let user = JSON.parse(localStorage.getItem("user")) || {};
  console.log(user.name);
  
  return `
          <div>
            <img src="./IMG/logo.png" alt="Logo" class="header-logo">
          </div>
          <div class="d-flex align-items-center gap-5">
            <div>
              <ul class="pt-3 sidebar" id="sidebar">
                <li onclick=hidesidebar()><a href="#"><i class="fa-solid fa-xmark text-dark"></i></a></li>
                <li><a href="../index.html"><span>HOME</span></a></li>
                <li><a href="/pages/product.html">PRODUCT</a></li>
                <li><a href="/pages/addproduct.html">ADD PRODUCT</a></li>
                <li><a href="/pages/cart.html">CART</a></li>
                <li>
                 ${isloggedIn?"<span>Logout</span>" : `<a href="/pages/login.html">LOGIN</a>`}
                </li>
                <li>
                ${isloggedIn? `<span>${user.name}</span>`:`<a href="/pages/signup.html">SIGN-UP</a>`}
                </li>
              </ul>
              <ul class="pt-3">
                <li class="hideOnmobile"><a href="../index.html"><span>HOME</span></a></li>
                <li class="hideOnmobile"><a href="/pages/product.html">PRODUCT</a></li>
                <li class="hideOnmobile"><a href="/pages/addproduct.html">ADD PRODUCT</a></li>
                <li class="hideOnmobile"><a href="/pages/cart.html">CART</a></li>
                <li class="hideOnmobile">
                 ${
                  isloggedIn ? "<span>Logout</span>" : `<a href="/pages/login.html">LOGIN</a>`
                }
                </li>
                <li class="hideOnmobile">
                ${isloggedIn? `<span>${user.name}</span>`:`<a href="/pages/signup.html">SIGN-UP</a>`}
                </li>
                <li onclick=showsidebar() class="menu-button"><a href="#"><i class="fa-solid fa-bars"></i></a></li>
              </ul>
            </div>
          </div>
    `
};
export default navbar;