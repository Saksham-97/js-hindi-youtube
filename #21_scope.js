var c = 30 // global scoped

let a = 65

if(true){
    let a = 10 // blocked scoped
    const b = 20 // blockeds scoped
    var c = 300

    console.log("inner a: ", a)

    console.log("inner b: ",b)
}

c = 55

const b = 85

console.log("outer a: ", a)
// console.log(b) // this will give error because a and b are declared inside if hence they are blocked scope
console.log(c)
console.log("outer b: ", b)