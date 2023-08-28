// const name = "Saksham"
// const repoCount = 5

// console.log(name + repoCount + " value") // old and not preferrable type of concatinating strnigs in todays times

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // this syntax is more readable and reliable

// there is another way to declare the string

// const gameName = new String('Shikarii')
// console.log(gameName)
// console.log(typeof gameName)

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)

// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('a'))


// const newGameName = gameName.substring(0, 4) // last value is not included, we cannot use -ve values in this, substring will ignore that
// console.log(newGameName)

// const newGameName1 = gameName.slice(-8 , 3)
// console.log(newGameName1)

// const newGameName3 = "       Sabby    "
// console.log(newGameName3)
// // console.log(newGameName3.trim()) // removes spaces from starting and end
// console.log(newGameName3.replace('b', 'm'))
// console.log(newGameName3.trim().replace('b', 'm'))
// console.log(newGameName3.trim().replaceAll('b', 'm'))

// const url = "https://www.codewithharry.com"
// console.log(url.includes('code'))
// console.log(url.includes('sunday'))
// console.log(url.includes('com'))
// console.log(url.includes('hitesh'))

// const newName = new String('Saksham,Singh,27,1997')
// console.log(newName.split(','))

let google = "Java and Javascript are not the same!"
// console.log(google.length)
// console.log(google.indexOf('e'))
// console.log(google.indexOf('e', 34)) // starts from the 34 index position and search to the right
// console.log(google.indexOf('java')) // not found because case sensitive
// console.log(google.indexOf('Java'))
// console.log(google.indexOf('Java', 8)) // will find Java after 8 index position

// console.log(google.lastIndexOf('e'))
// console.log(google.lastIndexOf('e', 34)) // starts from the 34 index position and search to the left
// console.log(google.lastIndexOf('java')) // not found because case sensitive
// console.log(google.lastIndexOf('Java'))
// console.log(google.lastIndexOf('Java', 8))

let greet = "Good Morning Everyone"
console.log(greet.endsWith('everyone'))
console.log(greet.endsWith('Everyone'))
console.log(greet.endsWith('E'))
console.log(greet.endsWith('e'))
console.log(greet.endsWith('e', 16))