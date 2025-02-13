/*
Create a function that takes an array as an argument and returns the same
array with all elements sorted in descending order.
*/

function negativeSort(array) {
  return array.sort((a, b) => b - a);
}

console.log(negativeSort([3, 5, 1, 2, 11, 456]));

