//singelton

//object literals

const mySym = Symbol("key1") //symbol initiation


const jsUser = {
    name:"Jainil",
    age: 18,
    [mySym]:"mykey1",
    "full name": "Jainil Shah",
    location: "Ahmedabad",
    email: "jainil@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.email = "jainil@chatgpt.com"
//Object.freeze(jsUser)
//jsUser.email = "jainil@microsoft.com" //wont change
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}


console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
