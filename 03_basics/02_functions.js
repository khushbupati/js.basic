function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,600));
// this above code only write the first num but to print all num we have to use the rest and spread operator  ...



function calculateCartPrice(val1,val2,...num1){
    return num1
}
// in this fun the val1 ,val2 take the first two numbers
console.log(calculateCartPrice(200,400,500,600));



function loginUserMessage(username){
    return `${username} just logged in` 
}
console.log(loginUserMessage("khush"));


function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
       return
    //due to this written the the other statements which comes after the return not get executed
    }
    return `${username} just logged in`
}



function loginUserMessage(username="hello"){
    if(!username){
        console.log("please enter a username");
       return
    //due to this written the the other statements which comes after the return not get executed
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());