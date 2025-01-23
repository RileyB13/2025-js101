//Stringy Strings
/*
Write a function that takes one argument, a positive integer, and returns a string
of alternating '1's and '0's, always starting with a '1'. The length of the string
should match the given integer.
*/

/*
P Input: positive integer
  output: string of alternating ones and zeros always starting with one.
  
ex:

data structure/Algo: I'm going to loop a number of times determined by the
argument, concatenating 1's and 0's into a string.

define a function that takes a positive integer as an argument
if argument is 1 return '1'
if argument is even, divide it by two to determine an iterative variable
loop by iterative variable amount, concatenating '10' to a result string each 
iteration.
if argument is odd, subtract 1 from argument and do the same steps as previous
condition. At the end of loops concatenate a '1'.
return result string.
*/

let stringy = (num) => {
  let result = '';
  if (num === 1) {
    result += '1';
  } else if (num % 2 === 0) {
    for (let i = 0; i < num / 2; i += 1) {
      result += '10';
    }
  } else {
    for (let i = 0; i < (num - 1) / 2; i += 1) {
      result += '10';
    }

    result += '1';
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"