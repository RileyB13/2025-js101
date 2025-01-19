//Rock, paper, scissors
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
/*I don't understand why we don't need a const keyword to initialize variable.
In the video, they use it without the const keyword. I did a quick google and
found that it isn't necessary and makes the variable global by default. I need
to comb through the variable chapters to see if I missed something or if it is
still to come in a future lesson.
*/
function prompt(msg) {
  console.log(`==> ${msg}`);
}

function displayWinner() {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You win!!!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'scissors')) {
    prompt('You lose!!!');
  } else {
    prompt('You tied!!!');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner();

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

