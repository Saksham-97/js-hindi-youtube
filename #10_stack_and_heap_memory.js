// there are two types of memories: Stack and Heap

// Stack Memory is used in primitive datatypes
// Heap Memory is used in non-primitive datatypes

// example of stack memory:
// let id = 12345
// let newId = id

// newId = 123456

// console.log(id)
// console.log(newId)

// example of heap memory

let userOne = {
    email: "user@email.com",
    upiId: "8700@paytm"
}
console.log("userOne initially: " , userOne)

userTwo = userOne

userTwo.email = "user2@email.com"
userTwo.upiId = "3218@paytm"

// it changes the original values
console.log("userOne after: ", userOne)
console.log("userTwo: ", userTwo)