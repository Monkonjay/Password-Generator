// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function writePassword() {
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

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// // lowr case letter to array
// let lowCaseList = ("a b c d e f g h i j k l m n o p q r s t u v w x y z");
// let lowCaseArr = lowCaseList.split(" ");


// // upper case letters to arrays
// let upperCaseList = ("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
// let upperCaseArr = upperCaseList.split(" ");

// // number to array
// let numberList = ("0 1 2 3 4 5 6 7 8 9");
// let numberArr = numberList.split(" ");

// // specail characters to array
// let specialCharList = ("! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ^ ] _ ` { | ~ }")
// let specialCharArr = specialCharList.split(" ");

// let letters = lowCaseArr.concat(upperCaseArr);
// // console.log(letters);

// // console.log(typeof(letters));


// // radomize the order of the array
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// };


// shuffle(letters);
// console.log(letters);

// for (i = 0; i < 5; i++) {
//    console.log(letters[i]);
// }