// for in loop

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by Apple"
}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "cpp", "py", "java", "cpp"]

for(const key in programming){
    console.log(key) // prints the keys of array and not the content
    console.log(programming[key])
}

// Map is not iterable