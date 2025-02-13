/*
Create a function that takes an array as an argument and returns a new
array containing all of the array elements that appears twice.
*/

function appearTwice(array) {
  let countObj = {};

  array.forEach(element => {
    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  })

  let newArr = [];

  for (prop in countObj) {
    if (countObj[prop] === 2) {
      newArr.push(prop);
    }
  }

  return newArr;
}

console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined]));
