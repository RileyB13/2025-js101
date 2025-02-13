/*
Create a function that takes an array of objects as an argument and returns the 
same array with all the elements sorted according to its value in ascending order.
*/

function sorting(array) {
  return array.sort((a, b) => {
    let keyA = Object.keys(a);
    let keyB = Object.keys(b);

    if (keyA > keyB) {
      return -1;
    } else if (keyA < keyB) {
      return 1;
    }

    return 0;
  })
}

console.log(sorting([{0: 1}, {3: 0}, {1: 3}]));

/*
I did ascending with values, and then descending with keys.
*/
