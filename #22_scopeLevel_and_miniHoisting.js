if (true) {
    const name = "Saksham"
    if (name === "Saksham") {
        const website = " youTube"
        // console.log(name + website)
    }
    // console.log(website)
}

//====**************** interesting *************************====

function addOne(num) {
    return (num + 1)
}
addOne(5) // if we write this before declartion of this function it will give no error
// console.log(addOne(5))

// we can also declare funtion like:

const addTwo = function(num){ // this is also called expression sometimes, it is like a variable, variables are very powerful in javascript, they can hold anything from functions to json values etc.
    return (num + 2)
}
addTwo(5) // if we write this before declaration of this function it will give error, becasue we also hold the function in a variable with declaring, this is becasue of execution context (hoisting)
// console.log(addTwo(5))