/*
Create a function that takes an array and an element as arguments
*/

function countEle(array, ele) {
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === ele) {
      count += 1;
    }
  }

  return count;
}

console.log(countEle(['name', 'year', 'age', 'name'], 'name'));
console.log(countEle([1, 2, 3, 3, 4, 5, 1, 2, 3, 4], 2));