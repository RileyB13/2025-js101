/*
Create a function that takes an array of strings as an argument and returns the 
same array with all elements sorted according to length of the string in 
ascending order.
*/

function sorting(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sorting(['o', 'hello', 'llo', 'ello', 'lo']));