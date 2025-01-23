//Grade Book
/*
Write a function that determines the mean (average) of the three scores passed to
it, and returns the letter associated with that grade.

Numerical score letter grade list:
-90<=score<=100: 'A'
-80<=score<90: 'B'
-70<=score<80: 'C'
-60<=score<70: 'D'
-0<=score<60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100.

P)
input: 3 numbers
output: a single char string representing the letter grade based on where the 
average score lands between the 3.

D/A: I'm going to add and divide the numbers all in one step to get the average.
Then I'm going to check the average score against ranges set up in a switch case
which will return the approprate string
*/


let getGrade = (num1, num2, num3) => {
  let average = (num1 + num2 + num3) / 3;

  if (average <= 100 && average >= 90) {
    return 'A';
  } else if (average < 90 && average >= 80) {
    return 'B';
  } else if (average < 80 && average >= 70) {
    return 'C';
  } else if (average < 70 && average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"