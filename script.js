
console.log("connected")
//  Set the different arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = '!@#$%^&*()'.split('');

console.log("hello");
// What options do you want for you password
// Length, uppercase,lower,num, special
function generatePassword() {
    var passLength = prompt("How many characters would you like your password to be");
    console.log("password length : ", passLength);
    if (passLength < 8 || passLength > 128) {
        alert("password length should be greater than 8 characters");
        return
    }

    else if (passLength >= 8 || passLength <= 128) {

        // Boollean the users options
        var confirmLowerCase = confirm("Press OK if you want lowercase letters");
        console.log("lowercase : ", confirmLowerCase);
        var confirmUpperCase = confirm("Press OK if you want uppercase letters");
        console.log("uppercase : ", confirmUpperCase);
        var confirmNumbers = confirm("Press OK if you want numbers");
        console.log("numbers : ", confirmNumbers);
        var confirmSpecialChars = confirm("Press OK if you want special characters");
        console.log("special chars : ", confirmSpecialChars);

        var userOptions = {
            passLength: passLength,
            hasLowerCase: confirmLowerCase,
            hasUpperCase: confirmUpperCase,
            hasNumbers: confirmNumbers,
            hasSpecialChars: confirmSpecialChars,
        }
        return userOptions;


        var options = getUserOptions();
        var thePot = [];
        var result = '';

        // What do we want in our pot of info
        if (options.hasLowerCase === true) {
            thePot = thePot.concat(lowerCase);
        }
        if (options.hasUpperCase === true) {
            thePot = thePot.concat(upperCase);
        }
        if (options.hasNumbers === true) {
            thePot = thePot.concat(num);
        }
        if (options.hasSpecialChars === true) {
            thePot = thePot.concat(specialChars);
        }
        if (options.userOptions === false) {
            alert("Must select at least one option");
        }
        else {
            for (i = 0; i < passLength; i++) {
                var randomPot = thePot[Math.floor(math.random() * thePot.length)];
                result += randomPot;
            }
        }
    }
    console.log(result);
}
    // Pick from the pot and make that the result    // Join result 




