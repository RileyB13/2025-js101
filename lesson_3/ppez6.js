/*
Examine the following code carefully. Can you Identify all of the variables,
primitive values, and objects that exist when this code executes?
*/

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
/*
variables: arr, newArr, num, newNum, num (again), double
primitives: 1, 2, 3, 1 (again), 1 (again again), 2, 1(once more), 2(again) 
objs: arr, newArr (same obj), double
*/
