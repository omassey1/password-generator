// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";
  //CODE GOES HERE
  var isUppercase = confirm('Would you like to use uppercase?');
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;

  if (isUppercase) {
    console.log('uppercase')
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