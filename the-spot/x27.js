/*
Create a function that takes three strings as arguments and return a string with
all the characters that are the same as the second argument replaced with the thirds
argument character.
*/

function replaceIt(main, str1, str2) {
  return main.replaceAll(str1, str2);
}

console.log(replaceIt('abcdefgaa', 'a', '00'));