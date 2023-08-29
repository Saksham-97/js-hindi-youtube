const marvelHeros = ["thor", "ironman", "blackpanther"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros) // it gives arrays under arrays

// console.log(marvelHeros) // this is wromg practice
// console.log(marvelHeros[3][2]) // this is wromg practice

// to add two or more arrays

// console.log(marvelHeros.concat(dcHeros)) // we can also write this as below

// let allHeros = marvelHeros.concat(dcHeros) // concat return new array
// console.log(allHeros)

// another way to join arrays:
// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros)

// const anotherArray = [1, 2, 3, [4, 5, 6] , 7, [6, 7, [4, 5]]]

// const realAnotherArray = anotherArray.flat(Infinity) // it makes a single array of all the elements consequetively (we can also give a number in flat() denoting up to what depth of array, we want to do the operation)
// console.log(realAnotherArray)

console.log(Array.isArray("Saksham")) // .isArray, checks if the given list is array or not
console.log(Array.from("Saksham")) // .from makes array from any given elements
console.log(Array.from({name: "Saksham"})) // interesting


// another way to making an Array from given variables:
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))