const marvel_heroes = ["Ironman", "thor", "spiderman"]
const dc_heroes = ["superman", "Flash", "Batman"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes) // array under array-- not feasible

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

const ar1 = [1,2,3,[4,5,6],7,[8,4,3,[4,5,6]]]

const ar2 = ar1.flat(Infinity)
console.log(ar2)

console.log(Array.isArray("Jainil"))
console.log(Array.from("Jainil"))
console.log(Array.from({name:"Jainil"})) // empty array

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))