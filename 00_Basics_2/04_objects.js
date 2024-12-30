const tinderUser = new Object()//singelton
const tinderUser2 = {} //non-singleton obj

//console.log(tinderUser)
//console.log(tinderUser2)

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName:{
            firstName : "Jainil",
            lastName : "Shah"
        }

    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullName)

const obj1 = {1 :"a", 2 : "b"}
const obj2 = {3 :"c", 4 : "d"}

//const obj3 = {obj1,obj2} // returns objects under object
//console.log(obj3)

//const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id:1,
        email:"j@gmail.com"
    },

    {
        id:2,
        email:"a@gmail.com"
    }
]

//console.log(users[0].email)





// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // returns an array of keys
// console.log(Object.values(tinderUser)) // returns array of values

// console.log(Object.entries(tinderUser)) // array of key value pair array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    name: "JS in Hindi",
    Price: "999",
    courseInstructor: "Hitesh"

}
//console.log(course.courseInstructor)

const {courseInstructor: Ins} = course //destructuring

//console.log(courseInstructor)
console.log(Ins)