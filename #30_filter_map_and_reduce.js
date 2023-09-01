// const coding = ["js", "ruby", "c++", "java", "python", "c#"]

// coding.forEach(element => {
//     console.log(element)
// });

// const values = coding.forEach(element => { // this will give undefined return
//     console.log(element)
//     return element //even of we use the return keyword
// });
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6]

// myNums.filter() // filter method, it also takes a call-back function inside it

// myNums.filter( (element) => (element > 3) ) // filter also return us the values, inlike the for-each and we can also store it in a variable
// const myNumValues = myNums.filter ( (element) => (element >= 3) ) // you have to give a condition in this filter call back method, also note that this is an implicit return

const myNumValues = myNums.filter((element) => {
    return element >= 3
}) // this is explicit return (we have to use return keyword in explicit return)
// console.log(myNumValues)

// now if we want to use same for for-each, how do we do it
const newNums = [] // declaring aa empty array
myNums.forEach((e) => {
    if (e >= 3) {
        newNums.push(e) // adding the element at last of the empty array
    }
})
// console.log(newNums)

const books = [
    {
        title: "Book One",
        genere: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book Two",
        genere: "History",
        publish: 1982,
        edition: 2005
    },
    {
        title: "Book Three",
        genere: "Non-Fiction",
        publish: 1983,
        edition: 2006
    },
    {
        title: "Book Four",
        genere: "Science",
        publish: 1984,
        edition: 2007
    },
    {
        title: "Book Five",
        genere: "Fiction",
        publish: 1985,
        edition: 2008
    },
    {
        title: "Book Six",
        genere: "History",
        publish: 1986,
        edition: 2009
    },
    {
        title: "Book Seven",
        genere: "Science",
        publish: 1987,
        edition: 2010
    },
    {
        title: "Book Eight",
        genere: "Non-Fiction",
        publish: 1988,
        edition: 2011
    },
    {
        title: "Book Nine",
        genere: "History",
        publish: 1989,
        edition: 2012
    }
]

// some real life filter method examples
// const userBooks = books.filter( (bk) => bk.genere === "History" )
// const userBooks = books.filter( (bk) => bk.edition >= 2008 )
// const userBooks = books.filter( (bk) => {return bk.publish >= 1987} )
// const userBooks = books.filter( (bk) => {return (bk.edition > 2005 && bk.edition < 2009)} )
// const userBooks = books.filter( (bk) => {return (bk.edition > 2005 && bk.genere === "History")} )
// console.log(userBooks)


// we want to add 10 to each element in array
const myNumbers = [1, 2, 3, 4, 5, 6]
// using for-each
// but this will not print array
myNumbers.forEach((e) => {
    // if(e){
    //     e = e + 10
    // }
    // console.log(e + 10)
})
// using map()
const add10 = myNumbers.map((num) => (num + 10))
// console.log(add10)


// very Important concept
// chaining, we can also use methods after methods, this is called chaining, for ex:
const myNewNums = myNumbers
    .map((num) => (num * 10)) // in this line we multiply each element by 10
    .map((num) => (num + 1)) // in this line we add 1 in each element which was multiplied by 10 (num value from first map() will be passed in second method)
    .filter((num) => (num >= 50)) // filter is true and false, because it checks the condition

// console.log(myNewNums)

// reduce method

const myArray = [11, 30, 12]
// const myTotal = myArray.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and cuurent value: ${currentValue}`)
//     return (
//         accumulator + currentValue
//     )
// }, 0) // here zero means start from zero (or we can say, initial accumulator is zero)

// same can be written with arrow function:
const myTotal = myArray.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)

// here zero means start from zero (or we can say, initial accumulator is zero)

// console.log(myTotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

//now we will all the prices in the shopping cart

const totalShopping = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalShopping)









