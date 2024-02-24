// Access Data

const booksItems = [{ Math: 2, Eng: 4, Ict: 5 }];

// Not get math value because of it is not a just object it is array under of object

// console.log(booksItems.Math)

// Proper access data 

console.log(booksItems[0])

console.log(booksItems[0].Math, booksItems[0].Ict)

// Use template string (Dynamic access)

console.log(` Math items ${booksItems[0].Math} Eng items ${booksItems[0].Eng}  and Ict items  ${booksItems[0].Ict}`)


/// Another example

const products =
    {
    Phone: 'Samsung',
    Light: 'A56s',
    Bike: 'CBR 155CC',
    Tour: [
        {
            Employee: 'Name',
            Alom: '4t3343',
            place: 'Sylhet',
            kishore:'hi'
            
        }
    ]
    }

//Access data

    console.log(products)
    console.log(products.Tour)
    console.log(products.Tour[0])
    console.log(products.Tour[0].Alom)


//OPTIONAL Chaining

 console.log(products.Tour[0].labib)
    // console.log(products.Tour[0]?.labib)