 
 console.log("connected")
//  set the different arrays
 var lowerCase = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 var specialChars = '!@#$%^&*()'.split('')


 // what options do you want for you password
 // length, uppercase,lower,num, special
 function getUserOptions(){
    var passLength = prompt("How many characters would you like your password to be");
    console.log("password length : ", passLength);
    if(passLength < 8){
        alert("password length should be greater than 8 characters");
        return
    }
    // do not allow to be over 128 characters
    else if(passLength > 128){
        alert("password length should be less than 128 characters");
        return
    }

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
    return userOptions
 }

function generatePassword() {
var options = getUserOptions();
var thePot = [];
var result = [];

// what do we want in our pot of info
if(options.hasLowerCase === true){
    thePot = thePot.concat(lowerCase);
}
if(options.hasUpperCase === true){
    thePot = thePot.concat(UpperCase);
}
if(options.hasNumbers === true){
    thePot = thePot.concat(Num);
}
if(options.hasSpecialChars === true){
    thePot = thePot.concat(specialChars);
}


// pick from the pot and make that the result



//join result 

}


generatePassword()