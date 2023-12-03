const accountId = 65678
let accountEmail = "himanshu.whatstool@gmail.com"
var accountPassword = "678"
accountCity = "jaipur"

// accountId = 2 // not allowed
accountEmail = "hins@gmail"
accountPassword = "7567657"
// accountCity = "bangalore"

/*
prefer not to use var
because issue of block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])
