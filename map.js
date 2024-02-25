//31-3 Array Map To Do One Line Loop Magic

// Array

const array = [7, 9, 3, 23];

// One way for array double
// let double = [];

// for (num of array) {
//     const doubled = num * 2;
//     double.push(doubled);
// }

// console.log(double)



// Map Ex:01

function arrmap(num) {
    let double = num * 2;
    return double;
}

const result = array.map(arrmap);
console.log(result);

// Maps Ex:02


// Arrow function

const map02 = x => x * 2;

// Using map

const res = array.map(map02)
console.log(res)



// Maps Ex:03

// Using map

const re = array.map(map02 = x => x * 2)
console.log(re)