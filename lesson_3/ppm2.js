/*
Starting with the string:
*/

let munstersDescription = "The Munsters are creepy and spooky.";

let splitDescript = munstersDescription.split('');

let flippedCaseArray = splitDescript.map((letter) => {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
})

let flippedCaseDescript = flippedCaseArray.join('');

console.log(flippedCaseDescript);