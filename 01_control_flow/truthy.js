// const emailUser = "j@email.com" // assumed that this is true value

// if(emailUser){
//     console.log("Got the email of user");
    
// } else{
//     console.log("No email for the user")
// }

// const emailUser2 = "" // assumed that this is false value

// if(emailUser2){
//     console.log("Got the email of user");
    
// } else{
//     console.log("No email for the user")
// }

// //falsy values

// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// //truthy values

// // "0", [], 'false', " ", {}, funtion(){}

// let userEmail3 = []

// if(userEmail3.length === 0){
//     console.log("Empty Array")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }

// IN Browser
// false == 0 -- true
// false == '' -- true
// 0 == '' -- true

// Nullish coalescing Opeartor (??) : null, undefined

let val1
val1= 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10--first value after null

console.log(val1)


// Ternary Opeartor

// condition ? true : false

const price = 100

price >=80 ? console.log("greater than 80") : console.log("less than 80")