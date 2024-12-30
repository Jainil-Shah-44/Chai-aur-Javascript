let myDate = new Date()
//console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let myCreatedDate =  new Date(2023,0,23,5,3)
let myCreatedDate2 =  new Date("2023-01-14")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate2.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate2.getTime())
//console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('Default',{
  weekday: "long"
}))

