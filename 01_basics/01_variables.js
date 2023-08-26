const accountId= 1234
let accountEmail="khush@p.com"
var accountPassword="1276"
accoutCity="jalgaon"
// prefer not to use var because of the issue of the block scope and functional scope 

// we cant change the accoutId as it is constant

accountEmail="radh@g.com"
accountPassword="21212121"
accountCity="varangaon"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);
