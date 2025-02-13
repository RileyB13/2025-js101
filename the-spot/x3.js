/*
Create a function that takes a string as an argument and returns a number
of words in that string.
*/

function countWords(string) {
  let wordsArr = string.split(' ');

  return wordsArr.length;
}

console.log(countWords('hello world'));
console.log(countWords('hello my baby, hello my darlin, hello my ragtime gaaaaaaal!'));