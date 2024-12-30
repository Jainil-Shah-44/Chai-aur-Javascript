// function add(a,b){
//         console.log(a+b)
// }

// const result = add(3,5)
// console.log(result) // undefined cz function doesnt return anything

function add(a,b){ //parameters

    // let result = a+b
    // return result

    return a+b
}

//console.log(add(3,5)) //argument

function loginUserMessage(username = "sam"){
    if(username=== undefined){    // if(!username{})
        console.log("Please enter a username")
        return 0
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Jainil"))

//console.log(loginUserMessage())

function calculateCartPrice(...num1){  // returns array of passed values
    return  num1                        // ... is rest opearator
}

//console.log(calculateCartPrice(200,300,400,2000))


function calculateCartPrice2(val1,val2,...num1){  // returns array of passed values
    return  num1                        // ... is rest opearator
}

//console.log(calculateCartPrice2(200,300,400,2000))
// val1=200 val2=300 ...num=[400,2000]


const user = {
    username: "Jainil",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 300
})

const myNewArray = [100,200,300,600]

function returnValue(newArray){
    return newArray[2]
}

console.log(returnValue(myNewArray))