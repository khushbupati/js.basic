//concatenation
const name = "khush"
const repocount = 1
console.log(`hello my name is ${name} and i am a CSE student having repo count${repocount}`);


const gameName = new String('khush')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
// it cant take the element at 4th it will write up to the third element
console.log(newString);

const anotherString =gameName.slice(0,4)
console.log(anotherString);
//by using this we can also give the negative value as well but in substring we can only giv e the positive value
// const anotherString =gameName.slice(-8,4)
const newStringOne="    khush   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://khush.com/khush%3patil"
console.log(url.replace('%3','-'));
console.log(url.includes('khush'));

const gameNamee = new String('khush-hi-com')
console.log(gameNamee.split('-'));
