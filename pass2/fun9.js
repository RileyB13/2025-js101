/*
Identify all of the variables named on each line of the following code. You may
assume that question is the name of a built-in function in JavaScript(it is not,
so this code won't work as written).
*/

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
line 1: multiply, left, right
2: product, left, right
3: product
6: getNumber, prompt
7: prompt
10: left, getNumber
11: right, getNumber
12: console, left, right, multiply

KEY TAKEAWAY: console is the variable name for the Console object, and therefore 
counts as a variable. .log() is a method that we are calling on the console
variable.
*/

