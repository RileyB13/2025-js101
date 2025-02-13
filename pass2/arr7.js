/*
Use reduce to compute the sum of the squares of all of the numbers in an array:
*/

function sumOfSquares(array) {
  let sum = array.reduce(function(accumulator, element) {
    return accumulator + element * element;
  }, 0);

  return sum;
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83