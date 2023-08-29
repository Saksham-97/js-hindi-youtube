// const tinderUser = new Object() // this is a singleton object
// there is no difference bwtenn
// const tinderUser = {} // this is not singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Saksham"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "your@email.com",
    fullName: {
        userFullName: {
            firstName: "Sammy",
            lastName: "Sharma"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName)

// we can also combine objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = { ...obj1, ...obj2 } // this is called spread operator, we will use this 90% of the time
// OR
const obj4 = Object.assign(obj1, obj2)
// OR
// const obj5 = Object.assign({}, obj1, obj2) // this practice is used in production grade code beacuse it gurantees that we will get an object
// '{}' this will act as target and rest variables will act as a source 
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)


console.log(Object.keys(tinderUser )) // this will give us the array of keys on which we can do further operations
// same as we can also take values
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // make every key-value to array

// sometimes, the value doesn't exist that we are looking
// we can ask the same

console.log(tinderUser.hasOwnProperty('sex'))
console.log(tinderUser.hasOwnProperty('id'))