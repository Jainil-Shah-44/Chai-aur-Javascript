//for of loop

// ["", "", ""]
// [{}, {}, {}] 
const arr = [1,2,3,4,5]

for (const val of arr) {
    //console.log(val)    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(greet)
    
}

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
//map.set('IN',"Ind")

//console.log(map)

for (const [key,value] of map){
    //console.log(key,':-', value)
}


const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const [key,value] of myObj) { // not iterable
    //console.log(key,value)   
    
}

