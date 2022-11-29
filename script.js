// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";
  //CODE GOES HERE
  var isUppercase = confirm('Would you like to use uppercase letters?');
  var isLowercase = confirm('Would you like to use lowercase letters?');
  var isSpecial = confirm('Would you like to use special characters?');
  var isNumber = confirm('Would you like to use numbers?');

  if (isUppercase) {
    console.log('uppercase');
    chooseFrom += upLetters;
  }

  if (isLowercase) {
    console.log('lowercase');
    chooseFrom += letters;
  }

  if (isSpecial) {
    console.log('special');
    chooseFrom += special
  }
  if (isNumber) {
    console.log('numbers')
    chooseFrom += numbers
  }

  console.log(chooseFrom);

  return "";
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);