// let value = 3
// console.log("value = ", value)
// let negValue = -value
// console.log("negValue = ", negValue)

// console.log(5+3)
// console.log(5-3) 
// console.log(5*3)
// console.log(5**3) // 5 to the power of three
// console.log(5/3) // quotient (5 divided by 3)
// console.log(5%3) // '%' is called modulues oprator, gives remainder (5 divided by 3)

// let str1 = "Hello"
// let str2 = " Saksham"
// let str3 = str1 + str2 // strings can only get added not any other operation
// console.log(str3)

// let x = 1
// let y = "2"
// let z = x + y
// console.log("z = ", z)
// console.log("typeof z = ", typeof z)

// let a = "3"
// let b = "4"
// let c = a + b
// console.log("c = ", c)
// console.log("typeof c = ", typeof c)

// let p = "4"
// let q = 5
// let r = 6
// let s = p + q + r // if first variable is string then all the variables will be treated as string
// console.log("s = ", s)
// console.log("typeof s = ", typeof s)

// let l = 7
// let m = 8
// let n = "9"
// let o = l + m + n // if last variable is string then all the starting variables will be treated as numbers and the last variable as string
// console.log("o = ", o)
// console.log("typeof o = ", typeof o)


/* =====================some tricky conversions======================= */

// below 3 types of code as not preferred
// console.log(true)
// console.log(true+1)
// console.log(+"")

//redability is the most important thing in coding

// below is the poor pratice of defining the variables
// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2
// console.log(num1 + num2 + num3)

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter)

let x = 3
let y = ++x // value will be incremented first and then printed
console.log(y)
console.log(x)

let a = 3
let b = a++
console.log(b) // value will be printed first then incremented
console.log(a)
