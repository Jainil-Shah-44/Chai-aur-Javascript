// prototype means extra funtionality and properties
//in any given data type

let computer = {CPU:12}
let lenovo = {
    screen : "HD",
    __proto__:computer
}
let tomHardware = {}

//console.log(lenovo.__proto__)

let genericCar = {tyres : 4}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericCar)

console.log(Object.getPrototypeOf(tesla))