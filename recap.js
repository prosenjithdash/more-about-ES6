/**
 
 1. var , let & const
 2. default peramiter
 3. template string
 4. arrow function
 5. destureing
 6. object keys, object.value, object.entries
 7. for of use for array & string
 8. for in lope use for object
 
 */


 
// Default perametar

function mark(n = 33, m) {

    const res = n + m;
    console.log(res);

 }

// Template string
 
let a = 78;
let b = 55;

console.log(`Heelo i am pappu age is ${a} and home no is ${b}`)

// arrow function

const x = 45;
const y = 78;

const arr = (x, y) => x + y ;
console.log(arr)



arr(x, y);


// destrureing

const arry = [67, 34, 22, 345];
const [n, m, o] = arry;
console.log(n, m, o);
