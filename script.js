var generateBtn = document.querySelector("#generate");

// possible characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //does not include "" and \
var pwdLength = 8; // 8 default value

// Write password to the #password input

function writePassword() {
  // User inputs their desired password length
  pwdLength = parseInt(prompt('Enter your password length. (Must be between 8 and 128 characters)'));

  console.log("Password length: " + pwdLength);

  //Validate password length
  if (pwdLength >= 8 && pwdLength <= 128){

    //Select character groups to include. How to make cleaner?
    var characters = 
        confirm("Include lower case letters?") ? lowercase : '';
    characters =
        confirm("Include upper case letters?") ? characters + uppercase : characters;
    characters =
        confirm("Include numbers?") ? characters + numbers : characters;
    characters =
        confirm("Include special characters?") ? characters + symbols : characters;


    //add validation for at least one character group chosen
    if(characters){

      //generate password
      function generatePassword() {

        var password = '';

        for(var i = 0; i < pwdLength; i++) {
          password = password + (characters.charAt(Math.floor(Math.random() * characters.length)));
        };

        return password;
      };

      var password = generatePassword();
      
      console.log(`Generated password: ${password}`);

      var passwordText = document.querySelector("#password"); 

      passwordText.value = password;

      
    } else {

      alert('You must choose at least one set of characters, please try again.')

    };


  } else {
    alert("Invalid password length. Please try again.")
  };

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

