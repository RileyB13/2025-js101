/*
Need 3 things:
- loan amount
- Annual Percentage Rate (APR)
- loan duration

Calculate 2 things:
- monthly interest rate (APR / 12)
- loan duration in months
*/
//print payment as a dollar and cents amount e.g. $123.45

let readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || +num < 1 || +num !== +num;
}

prompt('Hi there, thanks for choosing my loan calculator!!!');

prompt("To start, why don't you give me the loan amount... ");
let loan = readline.question();

while (invalidNum(loan)) {
  prompt(`Looks like you put in something we don't recognize, 
try inputting a valid loan amount.`);
  loan = readline.question();
}

prompt("Great, now let's have the APR...");
let apr = readline.question();

while (invalidNum(apr)) {
  prompt("That wasn't a valid APR. Type '5' for 5%, '10' for 10% and so on.");
  apr = readline.question();
}

prompt("Finally, we'll need to know how many years this loan has on it...");
let years = readline.question();

while (invalidNum(years)) {
  prompt("Please input the duration of your loan in years.");
  years = readline.question();
}

loan = +loan;
apr = +apr / 100;
years = +years;

let monthRate = apr / 12;
let months = years * 12;

let payment = loan * (monthRate / (1 - Math.pow((1 + monthRate), (-months))));

prompt(`Your monthly loan payment is:\n==> $${payment.toFixed(2)}`);