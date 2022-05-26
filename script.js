// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // promt user for password length
  // pwLength = prompt("Enter the lenght for your password");
  getPasswordLength();
  getCriteria();


  function getPasswordLength() {

    passwordLength = parseInt(prompt("Enter length for your password"));
    
    // ensure lenth is an integer
    if(!Number.isInteger(passwordLength)) {
      alert("Entry must be an integer");
      getPasswordLength();
    
    // alert user if length not between 8 and 128 
    } else if(passwordLength < 8 || passwordLength > 128) {     
      alert("Password length must be between 8 and 128 characters long");
      getPasswordLength();
    };
   
  };

  function getCriteria() {
    let confirmCount = 0;

    confirmLowerCase = confirm("Do you want to include lower case letters?");
    if(confirmLowerCase) {
      confirmCount += 1
    }


    confirmUpperCase = confirm("Do you want to include upper case letters?");
    if(confirmUpperCase) {
      confirmCount += 1
    }


    confirmNumbers = confirm("Do you want to include numbers?");
    if(confirmNumbers) {
      confirmCount += 1
    }


    confirmSpecialChar = confirm("Do you want to include special characters?");
    if(confirmSpecialChar) {
      confirmCount += 1
    }


    // alert user if user selected less than 1 criteria
    if(confirmCount < 1) {
      alert("You must select at least 1 criterium for your password");
      getCriteria();
    }

  };


  let finalPassword = [];

  // Begin arrays for character types
  // Array for lower case letters
  let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // passwordCharacters = lowerCaseArr.join('');
  
  // upper case letters array
  let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // passwordCharacters = upperCaseArr.join('');

  // number array
  let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  // specail characters array
  let specialCharArr = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', ']', '_', '`', '{', '|', '~', '}'];

  // end arrays for charachter types

  // select array for password: 
  selectedPwArray = [];

  if(confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialChar) {
    selectedPwArray = lowerCaseArr.concat(upperCaseArr,numberArr,specialCharArr);

  } else if(confirmLowerCase && confirmUpperCase && confirmNumbers) {
    selectedPwArray = lowerCaseArr.concat(upperCaseArr,numberArr);
    
  } else if(confirmLowerCase && confirmSpecialChar) {
    selectedPwArray = lowerCaseArr.concat(specialCharArr);

  } else if(confirmLowerCase && confirmUpperCase) {
    selectedPwArray = lowerCaseArr.concat(upperCaseArr);

  } else if(confirmLowerCase) {
    selectedPwArray = lowerCaseArr;

  } else if(confirmUpperCase && confirmNumbers) {
    selectedPwArray = upperCaseArr.concat(numberArr);

  } else if(confirmUpperCase && confirmSpecialChar) {
    selectedPwArray = upperCaseArr.concat(specialCharArr);

  } else if(confirmUpperCase) {
    selectedPwArray = upperCaseArr;

  } else if(confirmNumbers && confirmSpecialChar) {
    selectedPwArray = numberArr.concat(specialCharArr);

  } else if(confirmNumbers) {
    selectedPwArray = numberArr;

  } else {
    selectedPwArray = specialCharArr;
  };

  // else if(confirmUpperCase && !confirmLowerCase && confirmNumbers && !confirmSpecialChar) {
    // selectedPwArray = upperCaseArr.concat(NumberArr);
  // };

  // randomize the selected array order 
  selectedPwArray.sort(() => Math.random() - 0.5);

  // console.log(typeof(selectedPwArray));

  // for(i = 0; i < passwordLength; i++) {
    
  // }

  finalPassword = selectedPwArray.join('');


  return finalPassword.slice(0, passwordLength);

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
