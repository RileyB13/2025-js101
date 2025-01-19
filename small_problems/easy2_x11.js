//Get Middle Character
/*
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
*/

let centerOf = (string) => {
  let length = string.length;

  if (length === 0) {
    return 'This is not the way...';
  } else if (length === 1 || length === 2) {
    return string;
  } else if (length % 2 === 1) {
    return string[((length + 1) / 2) - 1];
  } else {
    return `${string[length / 2 - 1]}${string[length / 2]}`;
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"