//Calculating electricity bill
function output() {
    let units = document.getElementById("unit").value;

    let famount = 0
    let fees = 100
    if (units <= 50) {
        famount = units * 5;
    }
    else if (units > 50 && units <= 100) {
        famount = 50 * 5 + (units - 50) * 10;
    }
    else if (units > 100 && units <= 150) {
        famount = 50 * 5 + 50 * 10 + (units - 100) * 15;
    }
    else if (units > 150) {
        famount = 50 * 5 + 50 * 10 + 50 * 15 + (units - 150) * 20;
    }

    lastAmout = famount + fees;
    console.log(lastAmout)

    document.getElementById("result").innerHTML = "The Amount is : " + lastAmout;
}