/*
Create a function that takes a string as an argument and returns a string with the
first and the last character swapped.
*/

function swappIt(string) {
  let strArr = string.split('');
  let firstChar = strArr.shift();
  let lastChar = strArr.pop();
  strArr.push(firstChar);
  strArr.unshift(lastChar);

  return strArr.join('');
}

console.log(swappIt('abcdef'));
