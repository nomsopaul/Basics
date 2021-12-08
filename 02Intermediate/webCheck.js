
let userEmail = 'noms123o'
let password = '1234'

let userChecker = function(myString) {
    if((myString.includes(123)) && (myString.length > 6)) {
        return true
    } else {
        return false;
    }
}

// console.log(userChecker(userEmail));

let passChecker = function(pass) {
    if ((pass.includes('123@!')) && (pass.length > 9)) {
        return true;
    } else {
        return false;
    }
}

console.log(passChecker(password));