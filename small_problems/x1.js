//Isn't it Odd?
/*
Write a function that takes one integer argument, which may be positive,
negative, or zero. This method returns true if the number's absolute value 
is odd. You may assume that the argument is a valid integer value.

Define a function that takes an integer as an argument
if number is less than zero
  multiply the number by -1
  if number is evenly divisible by 2
    return false
    otherwise return true
if number is zero
  return false
if number is greater than 0
  if number is evenly divisible by 2
  return false
  otherwise return true
*/

let isOdd = (num) => Math.abs(num) % 2 === 1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true