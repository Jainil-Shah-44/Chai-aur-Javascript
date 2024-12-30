let car = {
    make : "Toyota",
    model: "camry",
    year : 2020,
    start : function(){
        return `${this.make} starts in year ${this.year}`
    }
}

//console.log(car.start())
function Person (name,age){
    this.name=name,
    this.age=age
}

let john = new Person("John",20)
//console.log(john.age)

function Animal(type){
    this.type=type
}

Animal.prototype.speak = function(){
    return`${this.type} makes a sound`
}

Array.prototype.jainil = function(){
    return `custom method ${this}`
}

let myArray=[1,2,3]
//console.log(myArray.jainil())

let myNewArray=[1,2,3,4,5,6]
//console.log(myNewArray.jainil())


class Vehicle{
    constructor(make,model){
        
    }
}