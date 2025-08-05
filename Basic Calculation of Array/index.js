//  Map
function mapDouble() {
    const nums = [1, 2, 3, 4];
    const result = nums.map(n => n * 2);
    console.log("Map (Double Numbers):", result);
}

//  Filter: Even Numbers
function filterEven() {
    const nums = [5, 8, 13, 16, 23];
    const result = nums.filter(n => n % 2 === 0);
    console.log("Filter (Even Numbers):", result);
}

//  forEach:
function forEachNames() {
    const names = ['Alice', 'Bob', 'Charlie'];
    console.log("forEach:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

//  IndexOf 
function checkFruit() {
    const fruits = ['apple', 'banana', 'mango'];
    const index = fruits.indexOf('banana');
    console.log(`Index of 'banana': ${index}`);
}

//  FindIndex: First Adult (Age ≥ 18)
function findAdult() {
    const ages = [12, 17, 22, 14];
    const index = ages.findIndex(age => age >= 18);
    console.log("FindIndex (First Adult):", index);
}

//  Push, Pop, Shift, Unshift
function mutateArray() {
    const arr = ['A'];
    arr.push('B');
    arr.unshift('Start');
    arr.pop();
    arr.shift();
    console.log("Push, Pop, Shift, Unshift:", arr);
}

//  Splice (Insert & Remove)
function spliceTask() {
    const arr = ['a', 'b', 'd'];
    arr.splice(2, 0, 'c'); 
    arr.splice(0, 1);      
    console.log("Splice (Insert & Remove):", arr);
}

//  String Function: Join & Split
function stringFuncs() {
    const text = "HTML,CSS,JS";
    const arr = text.split(',');
    const joined = arr.join(' - ');
    console.log("Split:", arr);
    console.log("Joined:", joined);
}

mapDouble();
filterEven();
forEachNames();
checkFruit();
findAdult();
mutateArray();
spliceTask();
stringFuncs();
