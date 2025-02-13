/*
This function is intended to return all the factors of a number:
However, it fails when the input is 0 or negative. How can you make it work
without using a do/while loop?
We don't want factors for 0 or negative numbers, we just need to handle it
gracefully instead of raising an exception or going into an infinite loop.
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

/*
Bonus: the (number % divisor === 0) is designed to find truthy factors that divide
evenly into our given number.
*/
