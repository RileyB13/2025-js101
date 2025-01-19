//Greeting a user
/*
Write a program that will ask for user's name. The program will then greet
the user. If the user writes 'name!' then the computer yells back to the user.
*/

let readline = require('readline-sync');

let userName = readline.question('What is your name?');

if (userName[userName.length - 1] === '!') {
  console.log(`HELLO ${userName.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`); 
} else {
  console.log(`Hello ${userName}.`);
}

