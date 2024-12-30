// this---refers to current context

const user = {
    username: "Jainil",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to the website`)
       // console.log(this) gives all values of the object
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this) //returns empty object, in browser it returns 'Window'


function chai(){
    let username = "jainil"
    // console.log(this)
    console.log(this.username) // undefined...this wont work in funtions
}

//chai()

const chai2 = () =>{
    let username = "jainil"
    console.log(this) // returns empty object
    console.log(this.username) // undefined

}

// chai2()  

// const addTwo = (num1,num2) =>{
//     return num1 + num2

// }

// console.log(addTwo(5,6))

//const addTwo = (num1,num2) => num1 + num2

//const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) =>({username : "jainil"})


console.log(addTwo(5,6))

