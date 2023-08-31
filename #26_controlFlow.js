// comparison operators: '<, >, <=, >=, !=, ==, ===, !=='

// if and if-else

if (2 === "2") {
    // console.log(true)
}
else {
    // console.log(false)
}

const isUserLoggedIn = true

const temp = 27

if (temp < 50) {
    // console.log("less than 50")
}
else {
    // console.log("temp more than 50")
}

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`) // this line will not executed becasue we declared the power variable inside a scope

const balance = 1000

// if ( balance > 500 ) console.log("below 1000"); // this is called implicit scope and here ';' is compulsory to terminate the line
// if ( balance > 500 ) console.log("below 1000"), console.log("Improve your balance"); // we can also write like this but this is highly unlikely to accept in big companies, generally not a good practice


// nesting conditions:

if (balance < 500) {
    // console.log("less than 500")
}
else if (balance < 750) {
    // console.log("less than 750")
}
else if (balance < 900) {
    // console.log("less than 900")
}
else {
    // console.log("less than 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    // console.log("Allow to purchase")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in")
}


//  switch

// const key = value
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

/*
const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    default:
        console.log("No Match")
        break;
}
*/

/*
const mahina = "feb"

switch (mahina) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;
    default:
        console.log("No Match")
        break;
}

*/

// truthy and falsy values


const userEmail = "your@email.com"
// const userEmail = 0
// const userEmail = 1
// const userEmail = 11
// const userEmail = -11
// const userEmail = ""
// const userEmail = []
// const userEmail = {}

if (userEmail) {
    // console.log("Have email")
}
else {
    // console.log("Don't have email")
}


// rigth way to check for empty array:
const userSignMail = []
if (userSignMail.length === 0) {
    // console.log("Array is empty")
}
else {
    // console.log("Array is not empty")
}

// rigth way to check for empty object:
const userContact = {
    // user: "name"
}
if (Object.keys(userContact).length === 0) { // here 'Object.keys(userContact)', give us the array of the key inside object and after that we can run Array methods on that
    // console.log("Object is empty")
}
else {
    // console.log("Object is not empty")
}


// falsy values:
// 1. false
// 2. 0
// 3. -0
// 4. BigInt (0n)
// 5. ""
// 6. null
// 7. undefined
// 8. NaN (not a number)

// expect all above falsy values, all are truthy values
// some example of truthy values:
// 1. "0"
// 2. "false"
// 3. " " (space in string, *this is not a empty string*)
// 4. []
// 5. {}
// 6. function(){} (empty function)


// some extra info:
// console.log(false == 0)
// console.log(false == "")
// console.log(0 == "")


// Nullish/Null Coalescing Operator (??) (whole story here is based on null and undefined only)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = 10 ?? undefined
// val1 = 10 ?? null
// val1 = null ?? 10 ?? 15 // here first value after null will be assingned
// console.log(val1)


// Terniary Operator
// syntaxt:
// consition ? true statement : false statement
// example:
const coldCoffeePrice = 150
coldCoffeePrice >= 100 ? console.log("greter than 100") : console.log("less than 100")




