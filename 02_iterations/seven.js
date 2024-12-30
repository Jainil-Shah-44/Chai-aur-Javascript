//reduce

const myNums =[1,2,3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc:  ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

//console.log(myTotal)

const shoppingCart = [
    {
        itemName:"js Course",
        price: 3999
    },
    {
        itemName:"py Course",
        price: 999
    },
    {
        itemName:"mobile app Course",
        price: 5999
    },
    {
        itemName:"data science Course",
        price: 13999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(priceToPay)