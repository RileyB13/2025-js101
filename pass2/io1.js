/*
Write a dynamic greeter program named greeter.js The program should ask for your
name, then output 'Hello, {name}!' where {name} is the name you entered.
*/

let readline = require('readline-sync');

let name = readline.question('What is your name? ');

console.log(`Hello, ${name}!`);
