//pseudocode
/*
ask user for first num
ask user for second num
ask user for operation to be performed
perform operation
display result
*/
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator');

prompt('What is the first number?');
let num1 = (readline.question());

while (invalidNumber(num1)) {
  prompt('Invalid number, please re-enter a valid first number.');
  num1 = (readline.question());
}

prompt('What is the second number?');
let num2 = (readline.question());

while (invalidNumber(num2)) {
  prompt('Invalid number, please re-enter a valid second number.');
  num2 = (readline.question());
}

prompt('What is the operation?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose from the following.\n1) Add 2) Subtract 3) Multiply 4) Divide');
  operation = readline.question();
}

num1 = Number(num1);
num2 = Number(num2);

let output;

switch (operation) {
  case '1':
    output = num1 + num2;
    break;
  case '2':
    output = num1 - num2;
    break;
  case '3':
    output = num1 * num2;
    break;
  case '4':
    output = num1 / num2;
    break;
}

prompt(`The result is... ${output}`);


