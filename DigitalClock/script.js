let hour = document.getElementById("hour")
let day = document.getElementById("day")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'JUly', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
let clock = setInterval(() => {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    document.getElementById("day").innerHTML = `${d} ${monthName[m]} ${y}`
    document.getElementById("minute").innerHTML=min
    document.getElementById("hour").innerHTML=h
    document.getElementById("second").innerHTML=sec
}, 1);