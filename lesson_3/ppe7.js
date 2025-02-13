/*
Consider the following object:
Create an array from this object that contains only two elements:
*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let nested = Object.entries(flintstones);
let final = nested.filter((pair) => pair[0] === 'Barney').flat();
console.log(final);