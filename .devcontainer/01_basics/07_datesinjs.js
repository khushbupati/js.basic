let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = newDate("01-14-2023")
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());

let newDate = new Date()
console.log(new Date);
newDate.toLocaleString('default',{
    weekday : "long"
})