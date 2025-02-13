/*
Write a function similar to the oddLengths function from exercise 6, but don't use
map or filter. Instead try to use the reduce method.
*/

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    if (element.length % 2 !== 0) {
      accumulator.push(element.length);
    }

    return accumulator;
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]