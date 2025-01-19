//When Will I Retire?
/*
Build a program that logs when the user will retire and how many more years
the user has to work until retirement.
*/

let readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');
let yearsOfWork = retirementAge - age;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsOfWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsOfWork} years of work to go!`);