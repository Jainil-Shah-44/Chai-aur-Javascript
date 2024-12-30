/*let score = "33abc"
console.log(typeof score) //string
console.log(typeof(score)) //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //NaN


let score1 = null
console.log(typeof score1) //object
console.log(typeof(score1)) //object

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1) //number
console.log(valueInNumber1) //0

let score2 = undefined
console.log(typeof score2) //undefined
console.log(typeof(score2)) //undefined

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2) //number
console.log(valueInNumber2) //0


let score3 = true
console.log(typeof score3) //boolean
console.log(typeof(score3)) 

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3) //number
console.log(valueInNumber3) //1, for false 0

let score4 = "jainil"
console.log(typeof score4) //string
console.log(typeof(score4)) 

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4) //number
console.log(valueInNumber4) //NaN


//"33"=> 33
//"33abc" => NaN
// true => 1, false => 0

console.log("Checking for Boolean")
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true
// "" => false
// "jai" => true

let someNum = 33
let stringNumber = String(someNum)
console.log(typeof stringNumber)

console.log("Operations")

let value=3
let negValue = -value
console.log(negValue)*/

let str1="hello"
let str2=" Jainil"
let str3=str1 + str2
console.log(str3)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) //122  if string is first whole will be string
console.log(1 + 2 + "2") //32 if string is last whole will be added and then  string will be attached

console.log(+true) //1
console.log(+"") //0

//prefix and postfix
