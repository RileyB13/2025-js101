/*
Take the object from the previous exercise as an argument for a new function
that will return a string with all the letters that appear in the object, in 
alphabetical order appearing as many times as the value states.
*/

function countOccurences(string) {
  let resultObj = {};

  for (let i = 0; i < string.length; i += 1) {
    if (resultObj.hasOwnProperty(string[i])) {
      resultObj[string[i]] += 1;
    } else {
      resultObj[string[i]] = 1;
    }
  }

  return resultObj;
}

//array containing keys of object. Iterate through the array using each element to 
//access the value. This value will be how many times the letter or key gets pushed 
//into a new array that will ultimately be joined into a string
function objToAlphaString(obj) {
  let sortedKeys = Object.keys(obj).sort();
  let resultArr = [];

  for (let i = 0; i < sortedKeys.length; i += 1) {
    let currentLetter = sortedKeys[i];

    for (let j = 1; j <= obj[currentLetter]; j += 1) {
      resultArr.push(currentLetter);
    }
  }

  let resultString = resultArr.join('');
  return resultString;
}

console.log(countOccurences('kkaggk'));

let newObj = countOccurences('kkaggk');

console.log(objToAlphaString(newObj));