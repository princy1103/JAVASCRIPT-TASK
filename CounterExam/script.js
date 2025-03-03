let count1 = 0
let value = document.getElementById("count1").innerHTML

console.log(value)

let counter = setInterval(() => {
    count1++;
    document.getElementById("count1").innerHTML = count1;
    if (count1 == value) {
        clearInterval(counter)
    }
}, 1)

let count2 = 0
let value2 = document.getElementById("count2"). innerHTML
console.log(value2)
let counter2 = setInterval(() => {
    count2++;
    document.getElementById("count2").innerHTML = count2
    if (count2 == value2) {
        clearInterval(counter2)
    }
}, 1)

let count3 = 0
let value3 = document.getElementById("count3"). innerHTML
console.log(value3)
let counter3 = setInterval(() => {
    count3++;
    document.getElementById("count3").innerHTML = count3
    if (count3 == value3) {
        clearInterval(counter3)
    }
}, 1)

let count4 = 0
let value4 = document.getElementById("count4"). innerHTML
console.log(value3)
let counter4 = setInterval(() => {
    count4++;
    document.getElementById("count4").innerHTML = count4
    if (count4 == value4) {
        clearInterval(counter4)
    }
}, 1)