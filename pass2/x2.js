//Basics X2
/*
Using arithmetic operators, get the individual digits of a 4-digit number like
4936:
*/

let number = 4936;

let ones = number % 10;

console.log(number % 10);

let tens = (number - ones) % 100 / 10;

console.log(tens);

let hundreds = (number - ones - (10 * tens)) % 1000 / 100;

console.log(hundreds);

let thousands = (number - ones - (10 * tens) - (100 * hundreds)) / 1000;

console.log(thousands);

