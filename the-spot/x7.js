/*
Create a function that takes a string as an argument and returns a number
representing number of words that occurred more than once in that string.
*/

function countDuplic(string) {
  let words = string.split(' ');
  let countObject = {};

  words.forEach(word => {
    if (countObject[word]) {
      countObject[word] += 1;
    } else {
      countObject[word] = 1;
    }
  });

  let allCountsArray = Object.values(countObject);
  let dupesCountsArray = allCountsArray.filter(num => {
    return num > 1;
  })

  let numOfDupes = dupesCountsArray.length;

  return numOfDupes;
}

console.log(countDuplic('one two one three two'));
console.log(countDuplic('flower cat cat dog flower dog'));
