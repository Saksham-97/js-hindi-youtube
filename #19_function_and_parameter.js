// function is just package of some lines of code under one name

// console.log("S")
// console.log("a")
// console.log("b")
// console.log("b")
// console.log("y")

// nw we write this under a function

// function sayMyName() {
//     console.log("S")
//     console.log("a")
//     console.log("b")
//     console.log("b")
//     console.log("y")
// }

// sayMyName // just a reference of the function

// sayMyName() // execution of the function


// function add (num1, num2){
//     console.log(num1 + num2)
// }

// const result = add(3, 8)
// console.log("Result: ", result) // note that above fuction is not returning anything, so we are getting the value undefined

// function add (a, b){
// let c = (a + b)
// return c
// console.log("function console.log()") // function will not execute this line because we already have declared return(), if we put this line before return, this code will be executed

//OR
// we can simply return in a single line
// return (a + b)
// }

// const result = add(25, 9)
// console.log("Result: ", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Saksham"))
// console.log(loginUserMessage())

// we can also use if else statements with function

// function userMessage(name){
//     if(name === undefined){
//         console.log(`Please enter a name`)
//         // return // if we put return here, further else code will not execute
//     }
//     else{
//         return (`The name is ${name}`)
//     }
// }

// // console.log(userMessage(""))
// console.log(userMessage("Saksham"))


// another way to write function

function userMessage2(names = "user") { // here '= "user"' is the default value, if we do not pass any value while executing, dedault value will be printed
    if (!names) {
        console.log("Please enter a name");
        return
    }
    return `The name is ${names}`
}

// console.log(userMessage2())
console.log(userMessage2("Saksham"))