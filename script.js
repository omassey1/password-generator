// Assignment code here
  var isNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var isUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var isLowercase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var isSpecialchar = ['!' , '#' , '$' , '%' , '&' , '()' , '*' , '+' , '-' , '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@' , '[' , '`' , '{' , '|' , '}' , '~'];
var confirmations = [];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

    var passwordLength = prompt("Enter how many characters you would like your password to be, must be between 8 - 128 characters.");
  var confirmPasswordLength = parseInt(passwordLength);
  console.log(confirmPasswordLength)

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid choice. Try again.");
    return;
  }
 
  var lowerCaseConf = confirm("Do you want lowercase letters?");
  if (lowerCaseConf === true) {
    for (var i = 0; i < isLowercase.length; i++) {
      confirmations.push(isLowercase[i]);
    }
}

var upperCaseConf = confirm("Do you want uppercase letters?");
  if (upperCaseConf === true) {
    for (var i = 0; i < isUppercase.length; i++) {
      confirmations.push(isUppercase[i]);
    }
  }

  var numberConf = confirm("Do you want numbers?");
  if (numberConf === true) {
    for (var i = 0; i < isNumbers.length; i++) {
      confirmations.push(isNumbers[i]);
    }
  }

  var specialConf = confirm("Do you want characters?");
  if (specialConf === true) {
    for (var i = 0; i < isSpecialchar.length; i++) {
      confirmations.push(isSpecialchar[i]);
    }
  }

  var randomPass = "";
  for (var i = 0; i < confirmPasswordLength; i++) {
    confirmations[
      Math.floor(Math.random() * confirmations.length)];
    randomPass +=
      confirmations[
      Math.floor(Math.random() * confirmations.length)];
  }
  return randomPass
}
    
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);