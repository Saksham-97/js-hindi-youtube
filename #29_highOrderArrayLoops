// for of Loop (array specific loop)

/*
for (const iterator of object) { // here object is not the 'objects', it means any array or string or object etc (basically which can be iterated)
    
}*/

const myArray = [1, 2, 3, 4, 5, "name"]
for (const num of myArray) {
    // console.log(num)
}

const greet = "Hi There"
for (alphabet of greet) {
    if (alphabet == " ") {
        // break
    }
    // console.log(`char ${alphabet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('RUS', "Russian")
map.set('PO', "Poland")
map.set('IN', "India") // this will not inserted because map will remember that we have inserted same key before
map.set('In', "India") // this can get inserted because key is difference (case-sensitive)
// console.log(map)
// console.log(map.size)

for (const key of map) {
    // console.log(key) // this will give array of keys

}
// to print both key and values of map, we have a syntax
for (const [key, value] of map) {
    // console.log(key, "-" ,value)
}

// for of loop on 'object' (this method will not work on object)
const myObj = {
    item: "Pistol",
    price: 4999,
    model: 2020,
    'make': "Austria"
}
// for (const [key, value] of myObj){
//     console.log(key , '-', value)
// }
// we will apply for-in loop on the objects
for (const key in myObj) {
    // console.log(key) // for printing keys only
    // console.log(myObj[key])
    // console.log(`${key} - ${myObj[key]}`)
}

// for-in loop on array
for (const i in myArray) {
    // console.log(i) // this will only print the index numbers of the array
    // console.log(myArray[i]) // this wil only print the value of the array
    // console.log(`at ${i} value - ${myArray[i]}`)
}


// for-each loop (for-each loops are by-default injected in arays as prototypes/methods/properties)

const coding = ["js", "ruby", "c++", "java", "python", "c#"]
coding.forEach(function (item) { // here we do not provide any name to the function becasue this is a call-back function, alos note that the 'item' will go to every element of the array to operate the function on that, it is that smarts
    // console.log(item)
})
// we can also include arrow funtion in this
coding.forEach((value) => {
    // console.log(value)
})

// we can make a function outside and then call it to run on array, for ex:
function printMe(value) {
    console.log(value);
}
// coding.forEach(printMe) // we just need to give reference of function, not to execute it

// for.each can access the values, index and full array also

coding.forEach((item, index, array) => {
    // console.log(item, index, array)
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: ".js",
        languageType: "Dynamic"
    },
    {
        languageName: "Java",
        languageFileName: ".java",
        languageType: "Static"
    },
    {
        languageName: "Python",
        languageFileName: ".py",
        languageType: "Dynamic"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName) // every object inside this array is item
} )

// sort method

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortedFruits = fruits.sort();
// console.log(sortedFruits)

const veggies = ["potato", "eggplant", "gord", "ladyfinger"]
const reversedVeggies = veggies.reverse()
// console.log(reversedVeggies)

// we can use sort and reverse together also (called: chaining)
// console.log(fruits.sort().reverse())

// Sorting alphabetically works well for strings ("Apple" comes before "Banana").
// But, sorting numbers can produce incorrect results.
// "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function"


// syntax: array.sort(compareFunction)

const points = [40, 100, 1, 5, 25, 138, 10];
// const sortedPoints = points.sort( (firstValue, secondValue) => (firstValue - secondValue) ) // to sort in ascending order
// const sortedPoints = points.sort( (firstValue, secondValue) => (secondValue - firstValue) ) // to sort in descending order
// console.log(sortedPoints)

// to find the highest numnber in an array, a simple trick is to first sort the array in descending order than print the first element
// console.log(`Highest values: ${sortedPoints[0]}`)

// or we can also write the same in single line
const highestNumber = points.sort( (a, b) => (b - a) )[0]
console.log(highestNumber)

