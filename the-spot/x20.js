/*
Create a function that takes a multidimensional array and returns an array sorted
in descending order according to the length of the array.
*/

function sorting(array) {
  return array.sort((a, b) => {
    return b.length - a.length;
  })
}

console.log(sorting([[1,2,undefined], [null, 0, 'hello wolrd', 11], [{1:1}]]));
console.log(sorting([['a'], ['ab', 'a', null], [101, 1]]));
