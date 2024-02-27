//Array of object

const arrayObject = [

    { id: 1, name: 'samsung', price: 6778 },
    { id: 2, name: 'Iphone', price: 5675 },
    { id: 3, name: 'Lenovo', price: 2234}

]

//Map

// Return condition fulfilled value

// const map = arrayObject.map(name => name.name)
// console.log(map)





// Foreach

// Do not any value just did console values

foreach = arrayObject.forEach(id => console.log(id.id))



// Filter
// return condition bassed values
const filter = arrayObject.filter(price => price.price > 5000)
console.log(filter)



// Find
// return condition bassed just 1st value
const find = arrayObject.find(price => price.price > 5000)
console.log(find)


// Reduce
// Calculate total product price

const reduce = arrayObject.reduce((p, c) => p + c.price, 0);
console.log('Total sum of product price = ', reduce)

