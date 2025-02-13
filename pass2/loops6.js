/*
Reimplement the factorial function from exercise 2 using recursion. Once
again, you may assume that the argument is always a positive integer.
*/

let factorial = (int) => {
  if (int === 1) {
    return 1;
  }

  return int * factorial(int - 1);
}

