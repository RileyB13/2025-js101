/*
Create a function that takes a string as an argument and returns a number
representing occurrences of all letters that appears exactly twice.
*/

function countDupeChar(string) {
  let countObj = {};

  for (let i = 0; i < string.length; i += 1) {
    if (countObj[string[i]]) {
      countObj[string[i]] += 1;
    } else {
      countObj[string[i]] = 1;
    }
  }

  let charCountArray = Object.values(countObj);
  let exactDupeArray = charCountArray.filter(num => {
    return num === 2;
  })

  return exactDupeArray.length;
}

console.log(countDupeChar('123123'));
console.log(countDupeChar('abcdea ab'));
