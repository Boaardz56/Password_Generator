import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const generatePassword = () => {
    let numberOfChar = prompt("Enter a number of character between 8-128");
    let passwordSet = "";
    let passCriteria = [];

    if (numberOfChar < 8 || numberOfChar > 128) {
      alert("Password length must be between 8-128 characters");
      return;
    }

    var confirmUpper = window.confirm("Do you want uppercase letters?");
    var confirmLower = window.confirm("Do you want lowercase letters?");
    var confirmNumbers = window.confirm("Do you want numbers?");
    var confirmSpecial = window.confirm("Do you want special characters?");

    console.log(confirmUpper)
    console.log(confirmLower)


    if (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial) {
      alert("At least one character must be selected");
      return;
    }

    randomPassword(numberOfChar, confirmLower, confirmUpper, confirmSpecial, confirmNumbers)
  }

  const randomPassword = (numberOfChar, confirmLower, confirmUpper, confirmSpecial, confirmNumbers) => {
    let possibleChar = [];
    var passUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var passLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var passSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "_"];

    if (confirmLower) {
      possibleChar.push() 
    }
  }

  const [password, setPassword] = useState('')
  return (
    <div className="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div className="card">
        <div className="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div className="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
            value={password}
          ></textarea>
        </div>
        <div class="card-footer">
          <button id="generate" className="btn" onClick={() => generatePassword()}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;

//    // add in conditional statements
//    if (confirmUpper === true) {
//       var upper = characters()
//       totalPassword += passCriteria.concat(passUpperChar);
//      }

//     if (confirmLower === true) {
//       var lower = characters()
//       totalPassword += passCriteria.concat(passLowerChar);
//      }

//     if (confirmNumbers === true) {
//       var number = numbers()
//       totalPassword += passCriteria.concat(passNumbers);
//     }
    
//     if (confirmSpecial === true) {
//       var symbol = symbol()
//        totalPassword += passCriteria.concat(passSpecial);
//     }

    // console.log("Password so far:" + totalPassword);
    
    //random set of characters must make password
    //  if (randomChar !== "") {
    //    alert("At least one type of character must be selected to create a password. Restart page and start over.");
    //  }
    //    else{
    //   for (i = 1; i <= passwordLength; i++) {
    //       passwordSet= passwordSet + randomChar.charAt(Math.floor(Math.random() * Math.floor((randomChar.length) - 1)));
    //   }
//     } else {}

//   //should display result
//       document.getElementById("password").value = passwordString;


  
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }