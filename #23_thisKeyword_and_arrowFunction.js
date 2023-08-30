const user = {
    username: "Saksham",
    price: 999,
    welcomeMessage: function () {
        console.log(`Hi ${this.username}, welcome to website`) // this keyword is use to refer the current context
        // console.log(this) // this will give us the while object
    }

}

// user.welcomeMessage()
// user.username = "Sam" // we changed the context here
// user.welcomeMessage()

// console.log(this) // this will return an empty object because we are in a node.js environment, if we try to do same thing in browser console, we wil get the whole window object (window is the global object in browser)

function coffee() {
    let username = "Saksham"
    //     console.log(this.username) // this wil not give any value
}
// coffee()

const shake = function () {
    let name = "chocolate"
    // console.log(this.name)
}
// shake()

const product = () => {
    let name = "watch"
    // console.log(this)
}
// product()

// const addTwo = (num1, num2) => { // basic arrow function , also called explicit return
//     return (num1 + num2)
// }

// const addTwo = (num1, num2) => (num1 + num2) // this is called implicit return , this should be in one line
// if you want to use {} you have to write return keyword

const addTwo = (num1, num2) => ({name: "Saksham"}) // we also need to wrap this in () if we want to return an object by implicit arrow function

console.log(addTwo(4, 5))
