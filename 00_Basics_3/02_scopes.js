// // let a=100

// // if(true){
// //     let a=30
// //     const b=40
// //     console.log("Inner: ",a)
// // }

// // console.log(a)

// function one(){
//     const username = "Jainil"

//     function two(){
//         const website = "Youtube"
//         console.log(username)
//     }

//     //console.log(website)

//     two()
// }

// one()

if (true){
    const username = "jainil"
    if (username === "jainil"){
        const website = " Youtube"
        //console.log(username + website)
    }

    //console.log(website)
}

//console.log(username)

console.log(addOne(5))
function addOne(num){
    return num + 1
}


//console.log(addTwo(5)) // wont work here---mini hoisting
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5))