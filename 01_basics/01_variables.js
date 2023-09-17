const accountId = 1445533;
let accountEmail = "adesh@google.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;
//accountId = 2; //not allowed
console.log(accountId);

accountEmail = "abc@gmail.com";
accountPassword = "1233432";
accountCity = "Bengaluru";
/*
Prefer not to use to var 
because of issue in block scope and fuctional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);

