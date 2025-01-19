//The End is Near But Not Here
/*
Write a function that returns the next to last word in the String passed to it as
an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

let penultimate = (string) => {
  return string.split(' ')[string.split(' ').length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

let middleWay = (words) => {
  let wordsArray = words.split(' ');
  let length = wordsArray.length;

  if (length === 0) {
    return 'This is not the way...';
  } else if (length === 1) {
    return wordsArray[0];
  } else if (length === 2) {
    return wordsArray.join(' ');
  } else if (length % 2 === 1) {
    return wordsArray[((length + 1) / 2) - 1];
  } else {
    return `${wordsArray[length / 2 - 1]} ${wordsArray[length / 2]}`;
  }
}

console.log(middleWay('Yeah lifes not out to get you, despite the things you been through'));
console.log(middleWay('Time to see if it really works'));
console.log(middleWay('one way to know'));
console.log(middleWay('Just two.'));
console.log(middleWay('Just'));

