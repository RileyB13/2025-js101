/*
Create a function that takes an array and a string as arguments and return an array 
with the second string removed as elements of the first array argument.
*/

function removeIt(array, string) {
  return array.filter((element) => {
    return element !== string;
  })
}

console.log(removeIt(['a', 0, undefined, 'aa', 'a', 'A', []], 'a'));
