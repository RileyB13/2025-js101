/*
Create a function that takes a string as an argument and returns an object
containing all of the words from the string and count occurrences of that word.
*/

function countWords(string) {
  let cleanString = string.replace(/[^a-zA-Z ]/g, '');
  let wordsArr = cleanString.split(' ');
  let array = wordsArr.map((word) => {
    return word.toLowerCase();
  })

  let countObject = {};

  for (let i = 0; i < array.length; i += 1) {
    if (countObject[array[i]]) {
      countObject[array[i]] += 1;
    } else {
      countObject[array[i]] = 1;
    }
  }

  return countObject;
}

console.log(countWords('Hello, hello world.'));
console.log(countWords('string string array string Array ARRAY object'));

console.log('a' < 'A');
console.log('z' < 'A');
console.log('A' < 'Z');

