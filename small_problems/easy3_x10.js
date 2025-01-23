//What Century is That?
/*
Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with 'st',
'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901-2000 comprise
the 20th century.

P)
input: a number indicating a year
output: a string denoting the century of said year with the appropriate post-text

So what we really have here is two problems:
1. I need a way to get the correct century from the number given
2. I need a way to attach the correct post-text.

prob1- Find the remainder of dividing the given year by 100. If the remainder
is zero as in the first test case, then we return the number divided by 100.
If the remainder is greater than zero, then we divide the number by 100 and add 1
to determine the century. Return this number

prob2- Here we have a weird problem. 1st, 2nd, 3rd. Everything else -th. All the
teens have -th even the first three 11th, 12th, 13th.
We could check strings for length and whether or not their second to last char
is a '1', and then throw them into a couple conditionals based on what we have.

things that need st, nd, rd:
if number string has a length of one digit (is 1 - 9) and is 1, 2, or 3
if number string has a length of more than one digit, the second to last digit is
not one, and the last digit is 1, 2, or 3.

things that need th:
literally everything else.
*/

let century = (number) => {
  let centNumString = stringOfCenturyNumber(number);
  let result = attachPostText(centNumString);

  return result;
}

let stringOfCenturyNumber = (rawNum) => {
  let string;
  let centNum;

  if ((rawNum % 100) > 0) {
    centNum = Math.floor(rawNum / 100) + 1;  
  } else {
    centNum = rawNum / 100;
  }

  string = String(centNum);
  return string;
}

let attachPostText = (string) => {
  let combinedString = string;
  let length = string.length;
  let secondToLast = string[length - 2];
  let last = secondToLast + 1;

  if (length === 1 || secondToLast !== '1') {
    switch (last) {
      case '1':
        combinedString += 'st';
        break;
      case '2':
        combinedString += 'nd';
        break;
      case '3':
        combinedString += 'rd';
        break;
      default:
        combinedString += 'th';
        break;
    }
  } else {
    combinedString += 'th';
  }

  return combinedString;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"