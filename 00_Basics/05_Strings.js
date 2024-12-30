const name = " Jainil"
const repoCount = 50

//console.log(name + repoCount + "Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('Jainil-FC-Com')
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newName = gameName.substring(0,6)
console.log(newName)
const nextName = gameName.slice(-8,5)
console.log(nextName)


const newStringOne = "     Jainil     "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())

const url = "https://jainil.com/jainil%20shah"

console.log(url.replace('%20','-'))
console.log(url.includes("com"))

console.log(gameName.split('-'))