/*
Create a function that takes an array of objects as an argument and return sorted
array in ascending order depending on sum of an array stored as a value of key
arr.
*/

function sorting(array) {
  return array.sort((a, b) => {
    let valSumA = a['arr'].reduce((acc, ele) => acc + ele, 0);
    let valSumB = b['arr'].reduce((acc, ele) => acc + ele, 0);

    if (valSumA < valSumB) {
      return -1;
    } else if (valSumA > valSumB) {
      return 1;
    }

    return 0;
  })
}

console.log(sorting([{arr : [1,2]}, {arr: [11]}, {arr: [1,2,3,0]}]));
