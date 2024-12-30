const myArr = [0,1,2,3,4,5]
const myHeroes = ["Spiderman", "Batman","Hanuman"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2])

// myArr.push(6)
// myArr.pop() // removes last element
// console.log(myArr)

// myArr.unshift(9) // enters element in the start of Array
// console.log(myArr)
// myArr.shift()  // removes 1st array element
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join() // gives string in newArr

// console.log(myArr)
// console.log(newArr)
// console.log(typeof myArr)
// console.log(typeof newArr)


console.log("A ", myArr)

const myn1 = myArr.slice(1,3) //
console.log("Sliced Array is ",myn1)
console.log("After Slicing the array remains same",myArr)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3) // cuts the array where splice is used
console.log(myn2)

console.log("After Splicing the Array changes ", myArr)