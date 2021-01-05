// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*_";
var charLength;

// Character types user selects
var chooseLowerCase;
var chooseUpperCase;
var chooseNumbers;
var chooseSpecial;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var getRandomChar = function(charType) {
  return charType[Math.floor(Math.random() * Math.floor(charType.length))];
}

var generatePassword = function() {
  
  let pw = ""

    // Checks if input is within parameters
  var passwordLength = function() {
   charLength = window.prompt("Please choose password length. Must be between 8-128 characters.")
   if (charLength > 7 && charLength < 129) {
    passwordCharacters();
   }
   else {
     passwordLength();
   }
  }
  

  // Confirms character types for password to be generated
  var passwordCharacters = function() {
    chooseLowerCase = window.confirm("Would you like your password to include lowercase letters?");
    chooseUpperCase = window.confirm("Would you like your password to include uppercase letters?");
    chooseNumbers = window.confirm("Would you like your password to include numbers?");
    chooseSpecial = window.confirm("Would you like your password to include special characters?");

    // If no character types selected, try again
    if (!chooseLowerCase && !chooseUpperCase && !chooseNumbers && !chooseSpecial) {
      window.alert("You must choose at least one.");
      passwordCharacters();
    }



    let solution = [];

    for (var j = 0; j < charLength; j++) {
      if (chooseLowerCase) {
        solution.push(getRandomChar(lowerCase));
      }
      if (chooseUpperCase) {
        solution.push(getRandomChar(upperCase));
      }
      if (chooseNumbers) {
        solution.push(getRandomChar(number));
      }
      if (chooseSpecial) {
        solution.push(getRandomChar(special));
      }
    }
    
    for(var i = 0; i < charLength; i++) {
      pw = pw + solution[i];
    }
    
   }
   
 
  passwordLength();
  
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
