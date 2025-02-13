//Rock, paper, scissors
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function playerWins(player, comp) {
  return (player === 'rock' && comp === 'scissors') ||
         (player === 'rock' && comp === 'lizard') || 
         (player === 'paper' && comp === 'rock') || 
         (player === 'paper' && comp === 'spock') || 
         (player === 'scissors' && comp === 'lizard') || 
         (player === 'scissors' && comp === 'paper') || 
         (player === 'spock' && comp === 'scissors') || 
         (player === 'spock' && comp === 'rock') || 
         (player === 'lizard' && comp === 'spock') || 
         (player === 'lizard' && comp === 'paper')
}

function displayWinner(player, comp) {
  prompt(`You chose ${player}, computer chose ${comp}.`);

  if (playerWins(player, comp)) {
    prompt('You win!!!');
  } else if (player === comp) {
    prompt('You tied!!!');
  } else {
    prompt('You lose!!!');
  }
}

/*
I need to get the input from the user.
Check whether any of our VALID CHOICES start with the given input.
if input is less than 2 length and start with 's' then it's false.
else check input to see if any valid choices start with input
Return true or false
*/

function choiceMatch(inputString) {
  let array = VALID_CHOICES.filter((hand) => hand.startsWith(inputString));

  return array[0];
}

function validInput(inputString) {
  if ((inputString.length < 2) && inputString.startsWith('s')) {
    return false;
  } else {
    let array = VALID_CHOICES.filter((hand) => {
      return hand.startsWith(inputString);
    })

    return array.length > 0;
  }
}

function scoreIncrementer(player, comp) {
  if (playerWins(player, comp)) {
    scoreKeeper.playerScore += 1;
  } else if (player === comp) {
    scoreKeeper.ties += 1;
  } else {
    scoreKeeper.computerScore += 1;
  }
}

let scoreKeeper = {
  playerScore: 0,
  computerScore: 0,
  ties: 0,
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userInput = readline.question().toLowerCase();

  while (!validInput(userInput)) {
    prompt('That is not a valid choice.');
    userInput = readline.question();
  }
  
  let choice = choiceMatch(userInput);
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  scoreIncrementer(choice, computerChoice);

  prompt(`Score: ${scoreKeeper.playerScore} wins, ${scoreKeeper.computerScore} losses, ${scoreKeeper.ties} ties.`);

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (scoreKeeper.playerScore === 3) {
    prompt(`You won the 3 out of 5 match!!!`)
    break;
  } else if (scoreKeeper.computerScore === 3) {
    prompt(`You lost the 3 out of 5 match!!!`)
    break;
  }

  if (answer[0] !== 'y') break;
}

