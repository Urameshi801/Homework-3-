// Assignment Code
const generateBtn = document.querySelector("#generate");
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercasedcharacters = ['a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function generatePassword() {
  let password = {
    generated: [],
    lowercasedcharacters: "y",
  }
  while (!(password.length >= 8 && password.length++)) {
    password.length = prompt("set password length between 3 and 128");
    password.length = validateLength(password.length);
  }
  while (!(password.upperCasedCharacters === "y" || password.upperCasedCharacters === "n")) {
    password.upperCasedCharacters = prompt("Do you want to use upper cased characters? Enter y or n");
    password.upperCasedCharacters = valedateBoolean(password.upperCasedCharacters);
  }
  while (!(password.specialCharacters === "y" || password.specialCharacters === "n")) {
    password.specialCharacters = prompt("Do you want to use special characters? Enter y or n");
    password.specialCharacters = valedateBoolean(password.specialCharacters);
  }
  while (!(password.number === "y" || password.numbers === "n")) {
    password.number = prompt("Do yo want to use numbers? Enter y or no");
    password.number = valedateBoolean(password.number);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = writePassword(password);
}

// Write password to the #password input
function writePassword(password) {
  let passwordArray = lowercasedcharacters;
  if (password.upperCasedCharacters === "y") {
    passwordArray.concat(upperCasedCharacters);
  }
  if (password.specialCharacters === "y") {
    passwordArray.concat(specialCharacters);
  }
  if (password.number === "y") {
    passwordArray.concat(password.number);
  }
  

  console.log(passwordArray);
  
  for (let index = 0; index < password.length; index++) {
    let randomNum = Math.floor(Math.random() * passwordArray.length);
    password.generated.push(passwordArray[randomNum])
    console.log(randomNum);

  }
  console.log(password)
  return password.join('');



}
function validateLength(length) {
  if (length > 2 && length < 101) {
    return length
  }
  else {
    alert("Choose a number between 3 and 100");
  }
}
function valedateBoolean(response) {
  console.log(response);
  if (response === "y" || response === "n") {
    return response
  }
  else {
    alert("Please enter y or n")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
