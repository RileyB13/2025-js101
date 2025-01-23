//Bannerizer
/*
Write a function thatt will take a short line of text, and write it to the
console log within a box.
*/

/*
P- Input: string
   Output: multi-line string

Ex: below

Data Structure: We're going to keep it all strings and concatenate based on length

Algorithm: 

Define a function that takes a string as an argument.
  -find length of string
  -log 5 strings to the console
  -the first string will be dashes with a plus sign on either end where there are
      as many dashes as the string length plus 2.
  -the second string will be the same, replace dashes with spaces and plus signs
      with pipes.
  -the middle string will be the argument string with a space and pipe on either
      side.
  -the last two strings will be the first two strings in reverse order        
*/

let logInBox = (string, maxLength) => {
  let borderString = `+${'-'.repeat((maxLength || string.length) + 2)}+`;
  let spacerString = `|${' '.repeat((maxLength || string.length) + 2)}|`;
  let msgString;
  
  if (maxLength) {
    msgString = `| ${string.slice(0, maxLength)} |`;
  } else {
    msgString = `| ${string} |`;
  }

  console.log(borderString);
  console.log(spacerString);
  console.log(msgString);
  console.log(spacerString);
  console.log(borderString);
}

logInBox('');
logInBox('To boldly go where no one has gone before.', 20);