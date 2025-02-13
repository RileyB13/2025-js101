/*
How many words in a string.
*/

function wordCount(string) {
  let wordsArr = string.split(' ');

  return wordsArr.length;
}

console.log(wordCount('How many words are in here? Should be nine!'));
