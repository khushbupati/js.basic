const myArr =[0,1,2,3,4,5]
const myHero =["shktiman","Naagraj"]

const myArr2 = new Array( )
console.log(myHero[1]);

myArr.push(6)
console.log(myArr);

myArr.unshift(9)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(19));

const newArr =myArr.join()
console.log(myArr);
console.log(typeof newArr);

//slice and splice
console.log("A",myArr);
const myn1 =myArr.slice(1,3)
console.log(myn1);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);

// the main difference in the splice and slice
const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);


