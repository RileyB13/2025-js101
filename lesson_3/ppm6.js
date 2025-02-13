/*
What do you think the following code will output?
*/

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//false. NaN is the only value in JS that is not equal to itself.
//Number.isNaN(value) or value !== value