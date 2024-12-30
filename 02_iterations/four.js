// forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// }) // no name for callback function

// coding.forEach( (item) => {
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}

//coding.forEach(printMe) // no paranthesis

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },    
]

myCoding.forEach( (item) => {
    console.log(`Language name is ${item.languageName}`)
    console.log(`Language Shortcut is ${item.languageFileName}`)

})