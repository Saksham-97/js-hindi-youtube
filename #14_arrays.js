const myArray = [0, 1, 2, 3, 4, 5] // these are the elements inside an array

// console.log(myArray)

// to get an element of array at a specific index
// console.log(myArray[7])

// const heros = ["superman", "batman", "ironman"]
// const myArray2 = new Array(1, 2, 3, 4)

// console.log(heros)
// console.log(myArray2)

// Array methods

// myArray.push("Singh") // add a value at the end
// myArray.push(7)
// myArray.push(8)
// myArray.pop() // remove the last element from an array

// myArray.unshift(9) // add a new value at the start of an array, also shift the indeces of all values
// myArray.shift() // removes the value from the start of an array, also shift the indeces of all values

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// const newArray = myArray.join()
// console.log(myArray)
// console.log(newArray)
// console.log(typeof newArray)

// slice and splice
// slice does not manipulaye original array
// splice does manipulaye original array

console.log("A", myArray)

const myn1 = myArray.slice(1, 3) // it means print elements from index 1 to 3 (excluding index 3 value)
console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1, 3) // it means print elements from index 1 to 3 (including index 3 value)
console.log("c", myArray)
console.log(myn2)
