const person = {
    name:"Jainil",

    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet()

const greetFuntion = person.greet
greetFuntion()

const boundGreet = person.greet.bind({name:"John"})
boundGreet()