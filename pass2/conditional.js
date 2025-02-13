function prompt(msg) {
  let readline = require('readline-sync');
  let input = readline.question(msg);
  return input;
}

let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}


