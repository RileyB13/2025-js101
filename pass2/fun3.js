/*
Write a program that uses a multiply function to multiply two numbers and returns
the result. Ask the user to enter the two numbers, then output the numbers and 
result as a simple equation.
*/

function getNum(prompt) {
  let readline = require('readline-sync');
  let num = Number(readline.question(prompt));
  return num;
}

let multiply = (a, b) => a * b;

let firstNum = getNum('Enter the first number: ');
let secNum = getNum('Enter the second number: ');

console.log(`${firstNum} * ${secNum} = ${multiply(firstNum, secNum)}`);
