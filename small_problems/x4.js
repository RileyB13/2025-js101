//How big is the room?
/*
Build a program that asks the user to enter the length and width of a room
in meters, and then logs the area of the room to the console in both square
meters and square feet.

Note: 1 square meter == 10.7639 square feet

Don't worry about validating input at this time. Use the readlineSync.prompt
method to collect user input.
*/

const SQMETERS_TO_SQFEET = 10.7639;

let updateFeetToMeters = () => {
  areaFeet = (length * width).toFixed(2);
  areaMeters = (areaFeet / SQMETERS_TO_SQFEET).toFixed(2);
}

let updateMetersToFeet = () => {
  areaMeters = (length * width).toFixed(2);
  areaFeet = (areaMeters * SQMETERS_TO_SQFEET).toFixed(2); //no magic numbers
}
let readline = require('readline-sync');

console.log('Enter "meters" or "feet" to indicate intended unit of measurement:');
let unitOfMeasure = readline.prompt();

console.log(`Enter the length of the room in ${unitOfMeasure}:`);
let length = readline.prompt(); //explicitly type coerce
length = Number(length);

console.log(`Enter the width of the room in ${unitOfMeasure}:`);
let width = readline.prompt(); //explicitly type coerce
width = Number(width);

let areaMeters; 
let areaFeet; 

(unitOfMeasure === 'meters') ? updateMetersToFeet() : updateFeetToMeters();

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);

