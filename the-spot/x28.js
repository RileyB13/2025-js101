/*
Create a function that takes 3 arguments: an array, a string, and a string and 
returns an array with all the elements that are the same as the second argument
replaced with the third argument.
*/

function replaceIt(arr, str1, str2) {
  return arr.map((ele) => {
    if (str1 === ele) {
      return str2;
    }

    return ele;
  })
}

console.log(replaceIt(['a', 'b', NaN, [], 'A', 'aa', 'a'], 'a', '00'));