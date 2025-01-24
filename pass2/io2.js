/*
Modify the greeter.js program to ask for the user's first and last names
separately, then greet the user with their full name.
*/

let readline = require('readline-sync');

let fName = readline.question('What is your first name? ');

let lName = readline.question('What is your last name? ');

console.log(`Hello, ${fName} ${lName}!`);
