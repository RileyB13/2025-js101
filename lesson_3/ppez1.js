/*
Write three different ways to remove all of the elements from the following
array:
*/

let numbers = [1, 2, 3, 4];

numbers.splice(0);
console.log(numbers);

let numbers1 = [1, 2, 3, 4];
let length = numbers1.length;

for (let i = 0; i < length; i += 1) {
  numbers1.pop();
}

console.log(numbers1);

let numbers2 = [1, 2, 3, 4];
let length2 = numbers2.length;

for (let i = 0; i < length2; i += 1) {
  numbers2.shift();
}

console.log(numbers2);

/*
A couple genius solutions in here. Setting the array length to 0 is so simple it
physically hurts me that I didn't think of it.
Creating a while loop that checks for numbers.length to contain a truthy value
and popping when it does is really good. Obviously it just stops when the length
equals 0 and is no longer truthy. That's really good.
*/

