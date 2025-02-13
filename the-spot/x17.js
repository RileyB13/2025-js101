/*
Create a function that takes an array of strings as an argument and returns the 
same array with all elements sorted according to length of the string in 
alphabetical order, case insensitive.
*/

function sorting(array) {
  return array.sort((a, b) => {
    let elementA = a.toUpperCase();
    let elementB = b.toUpperCase();

    if (elementA < elementB) {
      return -1;
    } else if (elementA > elementB) {
      return 1;
    }

    return 0;
  });
}

console.log(sorting(['goo', 'A', 'aB', 'Ab', 'c', 'C']));