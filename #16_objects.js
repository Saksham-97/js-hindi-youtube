// if object is made from literals, it will not be singleton
// if object is made from constructor, it will be singleton


// object literals:
// we can declare object by two types:
// 1. Object.create (this is the constructor method)

// 2nd way: (literal method)

// also adding a symbol to the object

const mySym = Symbol("key1")

const jsUser = {
//  keys  "values"
    name: "Saksham",
    lastName: "Singh",
    "full name": "Saksham Singh",
    age: 27,
    location: "delhi",
    email: "saksham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}

// how to access objects:

// one method is to user .key, like:
// console.log(jsUser.email)
// console.log("fullname") // this will not work and gives error

// another way to accces elements of the object:
// console.log(jsUser["name"])
// console.log(jsUser["full name"])

// to access the symbol value from the object:
// console.log(jsUser[mySym])

// jsUser.email = "saksham@microsoft.com"

// we can also lock the values so the one cannot change it
// Object.freeze(jsUser)

// jsUser.lastName = "Sharma" // this will not work because we have freeze the jsUser object

// console.log(jsUser)

// how to add function inside an object

jsUser.greeting = function () {
    console.log("Hello jsUser")
}

jsUser.greeting2 = function () {
    console.log(`Hello jsUser, ${this["full name"]}`) // here 'this' is to refernce same object, as we are inside the function
}

// console.log(jsUser.greeting) // this will ony give the refernce of the function
console.log(jsUser.greeting()) // this will return what code is written inside the function
console.log(jsUser.greeting2())
