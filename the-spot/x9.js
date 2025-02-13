/*
Count how many uppercase letters in a string.
*/

function countUpperChars(string) {
  let count = 0;
  let cleanString = string.replace (/[^a-zA-Z]/g, '');

  for (let i = 0; i < cleanString.length; i += 1) {
    if (cleanString[i] === cleanString[i].toUpperCase()) {
      count += 1;
    }
  }

  return count;
}

console.log(countUpperChars('Its the Mickey Mouse Club!'));