// Inheritance in prototypes
// object inherit property from other objects via prototype chain

function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hi ${this.name}`)
}

let jainil = new Person('jainil')
jainil.greet()