// const score = 100
// console.log("score: ", score)
// console.log("typeof score: ", typeof score)

// const balance = new Number(1000)
// console.log("balance: ", balance)
// console.log("typeof balance: ", typeof balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(3)) // gives the pricision value

// const otherNum = 123.8966
// console.log(otherNum.toPrecision(3)) // gives priority to the numbers before decimal

// const hundereds = 1000000

// console.log(hundereds.toLocaleString()) // gives commas according to indian values
// console.log(hundereds.toLocaleString('en-US')) // gives commas according to western values

// ************************Maths***********************

// maths library comes default with javascript

// console.log(Math) // it is an object with many properties

// console.log(Math.abs(-4)) // it does not convert -ve to +ve or vice versa, it just removes any sign before any number
// console.log(Math.abs(+45))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.4)) // will give higher value
// console.log(Math.round(4.6))
// console.log(Math.floor(4.6)) // will give lower value

// console.log(Math.sqrt(49))
// console.log(Math.pow(25, 2))
// console.log(Math.pow(11, 3))

// console.log(Math.min(4, 3, 6, -8))
// console.log(Math.max(4, 3, 6, -8))

// console.log(Math.random()) // it will give any random value between 0 & 1
// console.log(Math.random()*10)
// console.log(Math.random()*10 + 1) // to avoid scenarios like 0.0... , but the more efficient way to write this type of code is
// console.log((Math.random() * 10) + 1)
// console.log(Math.floor(Math.random() * 10) + 1)

const minValue = 10
const maxValue = 20

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue)