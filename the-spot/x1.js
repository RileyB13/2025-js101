/*
Create a function that takes two arguments: starting number and end number and
returns an array with numbers starting from startNumber and ending on endNumber.
*/

function generateArr(startNum, endNum) {
  let resultArr = [];

  for(let i = startNum; i <= endNum; i += 1) {
    resultArr.push(i);
  }

  return resultArr;
}

console.log(generateArr(3, 10));
