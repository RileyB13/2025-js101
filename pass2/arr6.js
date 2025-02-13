/*
Use map and filter to first determine the lengths of all the elements in an array
of string values, then discard the even values (keep the odd values).
*/

function oddLengths(array) {
  let lengthArray = array.map(function(ele) {
    return ele.length;
  })

  let filtered = lengthArray.filter(function(num) {
    return (num % 2 !== 0);
  })

  return filtered;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
