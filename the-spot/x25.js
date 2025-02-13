/*
Create a function that takes two strings as arguments. The second string represents
a character that is supposed to be removed from the string.
*/

function removeIt(main, toRemove) {
  return main.replaceAll(toRemove, '');
}

console.log(removeIt('abcdefghd', 'd'));