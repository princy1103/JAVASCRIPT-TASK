//email validation
function email_validation() {
    let Email_id = document.getElementById("email").value;
    let emailFormate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let password = document.getElementById("pas_word").value;
    let pass_formate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if (!emailFormate.test(Email_id)) {
        alert("Please enter correct email ID");
        return false;
    }
    if (password.match(pass_formate)) {
        return true;
    }
    else {
        alert("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.")
    }
}
function confirmpassword() {
    let uname = document.getElementById("uname").value
    let uname_format = uname.trim()
    let password = document.getElementById("pas_word").value;
    let confirmPassword = document.getElementById("confirmpas").value
    if (uname_format.length == 0) {
        alert("username is required !")
        return false
    }
    if (password != confirmPassword) {
        alert("Confirm password must be same with password !")
        return false
    }

}