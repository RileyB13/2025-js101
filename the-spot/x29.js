/*
Create a function that takes a string as an argument and a number and console log
the string rotated by one to the right as many times as the second argument.
*/

function rotate(string, rotations) {
  let strArr = string.split('');
  for (let i = 1; i <= rotations; i += 1) {
    strArr.push(strArr.shift());
    console.log(strArr.join(''));
  }
}

rotate('abcdefg', 3);