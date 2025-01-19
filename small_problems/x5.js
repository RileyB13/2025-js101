//Tip Calculator
/*
Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation
and assume that the user will enter numbers.
*/

let readline = require('readline-sync');

console.log('What is the bill?');
let bill = Number(readline.prompt());

console.log('What is the tip percentage?');
let tipPercent = (Number(readline.prompt())) / 100;

let tip = bill * tipPercent;
let total = bill + tip;

console.log(`The tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${total.toFixed(2)}`);

//Functions called on the wrong data type raise type errors.