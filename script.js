// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Pseudocoding

when generateBtn is clicked, run writePassword function
  writePassword function 
  length = prompt length
  change string to number
  check length with min-max otherwise invalid, ask again?
  confirm or select criteria...
    lowercase (arrays?)
    uppercase
    numbers
    special characters
  how to check if at least one is selected...
  
    then generate password?
    use length chosen to pick random characters (for loop)

    then display result to screen (inner html?)


*/
