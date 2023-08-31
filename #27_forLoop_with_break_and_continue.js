// for Loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

/*
for (let a = 1; a <= 10; a++){
    const value = a;
    if (a == 7){
        // console.log("7 is my lucky number")
    }
    // console.log(value)
}
*/

/*
for (let m = 0; m <= 3; m++){
    console.log(`outer loop ${m}`)
    for (let n = 0; n <= 2; n++){
        console.log(`inner loop ${n} and inner loop ${m}`)
    }
}
*/

/*
for (let x = 0; x <= 5; x++){
    console.log(`outer loop ${x}`)
    for (let y = 0; y <= 5; y++){
        // console.log(`inner loop ${n} and inner loop ${m}`)
        console.log(x + "x" + y + "=" + x*y);
    }
}
*/

/*
let myArray = ["Superman", "Ironman", "Batman", "Hulk"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
*/

// break and continue

for(let i = 1; i<= 20; i++){
    if(i == 5){
        console.log(`5 is detected`)
        // break
        continue
    }
    console.log(`count ${i}`)
}
console.log(`Loop End`)