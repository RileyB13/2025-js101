function getName(prompt) {
  let readline = require('readline-sync');
  let name = readline.question(prompt);
  return name;
}

let fName = getName('What is your first name? ');
let lName = getName('What is your last name? ');

console.log(`Good Morning, ${fName} ${lName}!`);