// similar to what class does

function Person(name,age){
    this.name=name
    this.age=age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota","Camry")
//console.log(myCar)


function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
//console.log(lemonTea.describe())

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
console.log(dog.sound())