
// for( let i=0; i<10; i++){
//     console.log(i)
// }

let myArray = ["flash", "Batman", "Superman"]

for (let i=0; i<myArray.length; i++){
    const element = myArray[i]
    if(element == "Batman"){
        console.log("Batman Detected")
        continue            // continue will not print batman, flow of program goes to for loop
    }
    console.log(element)
}


