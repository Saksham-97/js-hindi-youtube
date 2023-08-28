// let myDate = new Date()
// console.log("mydate: ",myDate)
// console.log("typeof mydate: ",typeof myDate);
// console.log("mydate.toString: ",myDate.toString())
// console.log("mydate.toDateString: ",myDate.toDateString())
// console.log("mydate.toLocaleString: ",myDate.toLocaleString())
// console.log("")
// console.log("mydate.toISOString: ",myDate.toISOString())
// console.log("mydate.toJSON: ",myDate.toJSON())
// console.log("mydate.toLocaleDateString: ",myDate.toLocaleDateString())
// console.log("mydate.toTimeString: ",myDate.toTimeString())

//                           yr,mon,date,hr,min,sec
// let myCreatedDate = new Date(2023, 0, 21, 5, 3, 40) // here 0 is month, month starts from 0 in javascript
// console.log(myCreatedDate)
// if we do not provide any thing after 'date' in declaring the date, it automatically sets the time at 12:00:00 am
// console.log(myCreatedDate.toLocaleString())

// let myNewDate = new Date ("01-21-2023")
// console.log(myNewDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myNewDate.getTime())

// to convert the above output of milliseconds in seconds
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

console.log(`Todays day is ${newDate.getDate()}`)

let myNewDate = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(`Today is ${myNewDate}`)
