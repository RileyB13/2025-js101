/*
Create a function thyat takes two strings as an argument and returns a number
representing occurrences of the second argument as a sub-string of the first
argument.
*/

function countSubstr(baseStr, matchStr) {
  let cleanStr = baseStr.replaceAll(matchStr, '-');
  console.log(cleanStr);
  let matchesArray = [];

  for (let i = 0; i < cleanStr.length; i += 1) {
    if (cleanStr[i] === '-') {
      matchesArray.push(cleanStr[i]);
    }
  }

  return matchesArray.length;
}

console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello'));