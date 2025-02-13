/*
Create a function that takes a string as an argument and returns all of the
occurrences of the letters.
*/

function countChar(string) {
  let cleanString = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let resultObj = {};

  for (let i = 0; i < cleanString.length; i += 1) {
    if (resultObj[cleanString[i]]) {
      resultObj[cleanString[i]] += 1;
    } else {
      resultObj[cleanString[i]] = 1;
    }
  }

  return resultObj;
}

console.log(countChar('Its the Mickey Mouse Clubhouse!'));