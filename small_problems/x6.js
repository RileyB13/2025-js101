//Sum or Product of Consecutive Integers
/*
Write a program that asks the user to enter an integer greater than 0, then asks
whether the user wants to determine the sum or the product of all numbers
between 1 and the entered integer, inclusive.
*/

let readline = require('readline-sync');

let consecutiveSum = (ary) => {
  let collective = 0;

  for (let i = 1; i < ary.length; i += 1) {
    collective += ary[i];
  }

  return collective;
}

let consecutiveProd = (ary) => {
  let collective = 1;

  for (let i = 1; i < ary.length; i += 1) {
    collective *= ary[i];
  }

  return collective;
}

let inputArray = readline.question('Please enter an series of integers:\ne.g. 1, 2, 3, 4, ...');

let array = inputArray.split(', ').map(Number);

let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

let sum = consecutiveSum(array);
let product = consecutiveProd(array);
let result;

if (operation === 's') {
  operation = 'sum';
  result = sum;
} else if (operation === 'p') {
  operation = 'product';
  result = product;
}

console.log(`The ${operation} of the integers in your array is ${result}.`);

//Learned a lot from trying to do the array implementation (further exploration)