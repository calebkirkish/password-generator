
console.log("connected")
//  Set the different arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = '!@#$%^&*()'.split('');

function generatePassword() {

    // Empty array of possible characters
    var thePot = [];

    // Initial result of the password
    var result = "";

    // The length of the password you wish
    var passLength = prompt("How many characters would you like your password to be");
    console.log("password length : " + passLength);

    //  If password length is shorter than 8 OR longer than 128 characters alert pops
    if (passLength < 8 || passLength > 128) {
        alert("password length should be greater than 8 characters");
    }

    // Run Boollean if these conditions for the length of the password are confirmed
    else if (passLength >= 8 || passLength <= 128) {

        // Confirm the users options
        // Uppercase, lower, numbers, special characters
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
            for (i = 0; i < passLength; i++) {

                var randomPot = thePot[Math.round(Math.random() * thePot.length)];
                result = result + randomPot;

            }
            console.log(result);
        }
    }
    // Password generated to the text area
    document.getElementById("password").innerHTML = result;
    // Enabling clipboard after password is generated
    document.getElementById("copyClipboard").disabled = false;
}

// Clipboard copy function
function copyClipboard() {
    // Create the variable copyPassword and link is to the element "password"
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // Create an alert that the password has been copied
    alert("Copied the password" + copyPassword.value);
}