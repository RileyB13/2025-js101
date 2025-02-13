/*
Create a function that takes a string as an argument and return a new string with
every second letter changed to upper case.
*/

function secondUpp(string) {
  let strArr = string.split('');
  let changedCharArr = strArr.map((char, index) => {
    if (index % 2 !== 0) {
      return char.toUpperCase();
    }

    return char;
  })

  return changedCharArr;
}

console.log(secondUpp('abcdef'));
