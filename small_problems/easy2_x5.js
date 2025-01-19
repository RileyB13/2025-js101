//Arithmetic Integer
/*
Write a program that prompts the user for two positive integers, and then prints
the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. Do not worry about
validating input.
*/

let readline = require('readline-sync');

let prompt = (msg) => console.log('==> ' + msg);

prompt('Enter the first number: ');
let num1 = Number(readline.question());

prompt('Enter the second number: ');
let num2 = Number(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
