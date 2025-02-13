/*
Modify the age.js program you wrote in the exercises for the Variables chapter.
The updated code should ask the user to enter their age instead of hard-coding
the age in the program.
*/

let readline = require('readline-sync');

let age = Number(readline.question('How old are you? '));

console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}





