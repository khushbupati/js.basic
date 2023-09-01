const user ={
    username : "khush",
    price : 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
handleObject(user)

// we can also write like this
// handleObject({
//     username :"khush",
//     price :999
// })


const myNewArray =[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));


// for printing only array we can make a function like that of following
const myyNewArray =[2,3,4,5,6]
function returnValue(getArray){
    return getArray
}
console.log(returnValue(myyNewArray));