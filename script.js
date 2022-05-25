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
  getLength();
  getCriteria();


  function getLength() {

    length = parseInt(prompt("Enter length for your password"));
    
    // ensure lenth is an integer
    if(!Number.isInteger(length)) {
      alert("Entry must be an integer");
      getLength();
    
    // alert user if length not between 8 and 128 
    } else if(length < 8 || length > 128) {     
      alert("Password length must be between 8 and 128 characters long");
      getLength();
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


  let passwordCharacters = [];

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
  }

  // randomize the selected array order 
  selectedPwArray.sort(() => Math.random() - 0.5);

  passwordCharacters = selectedPwArray.join('');




  
  for (i = 0; i < length; i++) {
  console.log(passwordCharacters[i]);
  }

  return passwordCharacters;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// let letters = lowCaseArr.concat(upperCaseArr);
// // console.log(letters);

// // console.log(typeof(letters));


// // randomize the order of the array
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// };




