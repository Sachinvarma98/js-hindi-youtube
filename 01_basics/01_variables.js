const accountId = 144553
let accountEmail = "Sachinverma@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;

// accountId = 2    // const not allowed to change 
//  any other thing allowed to change
// Prefer not to use var bcs of issue in block scope and functional scope

console.log(accountId);

accountEmail = "Rahul@gmail.com"
accountCity = "Allahabad"
accountPassword = "2"

console.log( "the account email is " +  accountEmail);
console.log(accountCity);
console.log(accountPassword);

console.table([accountId, accountPassword , accountEmail, accountCity, accountState])
