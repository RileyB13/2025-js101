/*
The Array.prototype.reverse() method reverses the order of elements in an array, and 
Array.prototype.sort can rearrange the elements in a variety of ways, including
descending. Both of these methods mutate the original array as shown below. Write
two distinct ways of reversing the array without mutating the original array. Use
reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse();
console.log(reversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let sorted = numbers.map((num) => num).sort((num1, num2) => num2 - num1);
console.log(sorted);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]