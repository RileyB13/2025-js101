/*
Create a function that takes a multidimensional array as an argument and returns
the same array sorted according to the sum of elements of inner arrays in ascending
order.
*/

function sorting(array) {
  return array.sort((a, b) => {
    let sumA = a.reduce((acc, ele) => acc + ele, 0);
    let sumB = b.reduce((acc, ele) => acc + ele, 0);

    if (sumA < sumB) {
      return 1;
    } else if (sumA > sumB) {
      return -1;
    }

    return 0;
  })
}

console.log(sorting([[1, 2, 3], [0, 1], [2, 1]]));

/*
Finished product here is descending. For ascending, swap the positive and 
negative returns in the if statement's if and else if clause.
*/
