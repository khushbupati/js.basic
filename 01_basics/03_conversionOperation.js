let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// suppose numer "33" => 33
//  "33abc" => NaN
//  true => 1  ,, false => 0

let isLoggedIn = "khush"

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// 1 => true; 0 => false
//  "" =>false
// "hitesh"

let someNumber = 33

let stringNumber =String(someNumber);
console.log(stringNumber);

// operations

let value=3
let negvalue=-value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2%2);
console.log(2/2);
console.log(2**2);//  ** this calculate the power of the first number

let str1 = "helllo "
let str2 = "khush"
let str3 =  str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+" ");

let num1 ,num2,num3 

num1 = num2  = num3 = 2+2
// ^  please please please dont do the  mistakes like this these is not the proper way to write the code

// write the above operations by using the bracketes use the bracketes to write such code
console.log((3+3)*(20/4));  
let gameCounter =100
++gameCounter; // we can also use gameCounter++ but there is difference in prefix and postfix 
console.log(gameCounter);