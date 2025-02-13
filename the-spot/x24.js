/*
Create a function that takes a string as an argument and return a new, reversed
string.
*/

function reverseIt(string) {
  return string.split('').reverse().join('');
}

console.log(reverseIt('abcdef'));
