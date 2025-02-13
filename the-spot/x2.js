/*
Create a function that takes a string as an argument and return an object with
letters of the string and their occurrence as properties:
*/

function countOccurences(string) {
  let resultObj = {};

  for(let i = 0; i < string.length; i += 1) {
    if (resultObj.hasOwnProperty(string[i])) {
      resultObj[string[i]] += 1;
    } else {
      resultObj[string[i]] = 1;
    }
  }

  return resultObj;
}

console.log(Object.keys(countOccurences('abbab')));
console.log(Object.values(countOccurences('abbab')));
console.log(countOccurences('abbab'));