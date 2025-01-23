//ddaaiillyy ddoouubbllee
/*
Write a function that takes a string argument and returns a new string that contains
the value of the original string with all consecutive duplicate characters
collapsed into a single character.
*/

//In: string
//out: new string with all dupe consecutive characters removed.

//structure: gonna use strings
//Create an empty string called crunchedString that will contain the result
//Create a variable containing the current character
//Create a variable containing the last character
//Iterate through the string.
//--if the current character isn't equal to the last character
// ---concat current character
// ---assign current character to last character 
//--else assign current char to last char and skip to next iteration
//After iterating through the entire argument string, return crunchedString 

let crunch = (string) => {
  let crunchedString = '';
  let lastChar;
  let currentChar;

  for (let i = 0; i < string.length; i += 1) {
    currentChar = string[i];

    if (currentChar !== lastChar) {
      crunchedString += currentChar;
    }
  
    lastChar = currentChar;
  }
  
  return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""