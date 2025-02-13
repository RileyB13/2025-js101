/*
Given a list of numbers, write some code to find and display the largest numeric
value in the list.
*/

function maximum(array) {
  let max = array[0];

  for (let ele of array) {
    if (max < ele) {
      max = ele;
    }
  }

  return max;
}

