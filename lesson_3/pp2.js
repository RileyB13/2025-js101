/*
How can you determine whether a given string ends with an exclamation mark( ! )?
*/

function bigFinish(string) {
  return (string[string.length - 1] === '!');
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(bigFinish(str1));
console.log(bigFinish(str2));
