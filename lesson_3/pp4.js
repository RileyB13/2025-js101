/*
Using the following string, create a new string that contains all lowercase letters
except for the first character, which should be capitalized. (See the example output.)
*/

function capString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

let munstersDescription = "the Munsters are CREEPY and Spooky.";

console.log(capString(munstersDescription));