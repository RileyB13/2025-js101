//Multiples of 3 and 5
/*
Write a function that computes the sume of all numbers between 1 and some other
number, inclusive, that are multiples of 3 or 5. For instance if the supplied 
number is 20, the result should be 98.

You may assume that the number passed in is an integer greater than 1.
*/

let multisum = (num) => {
  let total = 0;

  for (let i = 3; i <= num; i += 1) {
    if (i % 3 === 0) {
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
