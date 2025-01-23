//Double Doubles
/*
A double number is an even-length number whose left-side digits are exactly the 
same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all
double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; otherwise, return the double number
as-is.

P)
input: integer
output: if the number is a "double number" then return the number, else multiply 
the input number by 2

D/A:
I'm going to compare the integers using string comparison. I need to determine if
there are an odd or even number of chars. If possible divide the string in two,
and then compare these two strings for equality. If they are equal, I will
return the integer argument. If they are unequal I will return the integer
argument multiplied by 2.
*/

let twice = (num) => {
  let stringNum = String(num);
  let length = stringNum.length;
  let firstHalf = stringNum.slice(0, length / 2);
  let secondHalf = stringNum.slice(length / 2);

  if (length % 2 === 0 && firstHalf === secondHalf) {
    return num;
  }

  return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676