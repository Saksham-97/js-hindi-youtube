// lest imagine a scenario where we have a shopping cart in an ecomemrce site where the user can add
// idefinite number of itmes, therefore we cannot pass the finite parameters in that function, now we will understand,
// how to tackle that stuation

// function calculateCartPrice(...num1) { // here '...' is the rest operator, this will give us the Array of the values
function calculateCartPrice(val1, val2, ...num1) { // here val1 and val2 will take the first and second input and they will not get printed, rest values will go in the '...num1'
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 245))

const item = {
    itemName: "wiper",
    price: 999
}
// now, how to pass above user in a function
function handleObject(item) { // we can also pass any object inside the function and can directly call the keys, for eg: (anyObject.itemName)
    console.log(`item name is ${item.itemName} and price is ${item.price}`)
}

// handleObject(item)
// Or, we can also write as below (to change the values)
// handleObject({ // this does not change the original a
//     itemName: "mirror",
//     price: 1999
// })

// console.log("original object item = ", item)

// we can also pass arrays inside the function

const myArray = [200, 400, 500, 245]
const myNewArray = [-98, -56, -50, 100]

function returnSecondValue(getArray) {
    return (getArray[1])
}

console.log(returnSecondValue(myArray))
console.log(returnSecondValue(myNewArray))
// OR
console.log(returnSecondValue([1, 2, 3, 4]))