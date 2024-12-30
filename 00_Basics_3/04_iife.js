// immediately Invoked Function Expressions (IIFE)

// function chai (){
//     console.log(`DB CONNECTED`)
// }

// chai()

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`)
})();
// ; is compulsory for iife funtions
 // ()() iife--to remove scope of global pollution

 ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
 })("Jainil");

