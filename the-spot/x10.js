/*
Count how many numbers are in a string.
*/

function countNumbers(string) {
  let cleanString = string.replace(/[^0-9]/g, '');

  return cleanString.length;
}

console.log(countNumbers('Hello 937, bc 789!'));
