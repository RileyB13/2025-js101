/*
Create a function that takes an array as an argument and returns the same
array with all elements sorted in ascending order.
*/

function sorting(array) {
  return array.sort((a, b) => a - b);
}

console.log(sorting([3, 5, 1, 2, 11, 456]));