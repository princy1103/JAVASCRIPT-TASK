let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
let value1 = document.getElementById("count1").innerHTML
let value2 = document.getElementById("count2").innerHTML
let value3 = document.getElementById("count3").innerHTML
let value4 = document.getElementById("count4").innerHTML
let counter, counter2, counter3, counter4;

function startinterval() {
    counter = setInterval(() => {
        count1++;
        document.getElementById("count1").innerHTML = count1;
        if (count1 == value1) {
            clearInterval(counter)
        }
    }, 1)

    counter2 = setInterval(() => {
        count2++;
        document.getElementById("count2").innerHTML = count2
        if (count2 == value2) {
            clearInterval(counter2)
        }
    }, 1)

    counter3 = setInterval(() => {
        count3++;
        document.getElementById("count3").innerHTML = count3
        if (count3 == value3) {
            clearInterval(counter3)
        }
    }, 1)

    counter4 = setInterval(() => {
        count4++;
        document.getElementById("count4").innerHTML = count4
        if (count4 == value4) {
            clearInterval(counter4)
        }
    }, 1)
}

let stopCounter = () => {
    clearInterval(counter);
    clearInterval(counter2);
    clearInterval(counter3);
    clearInterval(counter4);
    counter = null;
    counter2 = null
    counter3 = null
    counter4 = null
};