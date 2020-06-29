
console.log("connected")
//  Set the different arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = '!@#$%^&*()'.split('');

console.log("hello");

var thePot = [];
var result = "";

// What options do you want for you password
// Length, uppercase,lower,num, special

var passLength = prompt("How many characters would you like your password to be");
console.log("password length : " + passLength);
if (passLength < 8 || passLength > 128) {
    alert("password length should be greater than 8 characters");

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





    // What do we want in our pot of info
    if (confirmLowerCase === true) {
        thePot = thePot.concat(lowerCase);
        console.log(thePot);
    }
    if (confirmUpperCase === true) {
        thePot = thePot.concat(upperCase);
    }
    if (confirmNumbers === true) {
        thePot = thePot.concat(num);
    }
    if (confirmSpecialChars === true) {
        thePot = thePot.concat(specialChars);
        console.log(thePot);
    }
    if (thePot.length === 0) {
        alert("Must select at least one option");
    }
    
    else {
        console.log(thePot.length);
        console.log("i am in loop");
        for (i = 0; i < passLength; i++) {
          
            var randomPot = thePot[Math.round(Math.random()*thePot.length)];    
            result = result + randomPot;

     }
     console.log(result);
    }
    console.log(result);
}


    // Pick from the pot and make that the result    // Join result 
