//getting into button
var generateBtn = document.querySelector("#generate");
//Create array of variables for globals
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*-=_";
var passUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "_"];
var passCriteria = [];

//builing password
function generatePassword() {

  //prompt to ask how many character user wants
  var numberOfChar = prompt("How many characters do you want?");
  //set a min and max range
  if (numberOfChar > 7 && numberOfChar < 25) {
  //prompt to ask what other values they want
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");

    //add in conditional statements
    if (confirmUpper) {
      passCriteria.concat(passUpperChar);
     }
     else {
        return false
      }

    if (confirmLower) {
      passCriteria.concat(passLowerChar);
     }
     else {
        return false
      }

    if (confirmNumbers) {
     passCriteria.concat(passNumbers);
    }
    else {
       return false
    }

    if (confirmSpecial) {
       passCriteria.concat(passSpecial);
    }
    else {
      return false
    }
  }
   else {
     alert("Must be between 8 and 128 characters")
   }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
