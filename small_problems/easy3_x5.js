//Right Triangles
/*
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the immages below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.
*/

/*
P)
input: positive integer
output: logs a bunch of * characters in the shape of a triangle

D/A: I'm going to use a loop to log a string each iteration.

define a function that takes a positive integer 'n' as it's argument
the argument will determine the amount of iteration
each iteration I will print an amount of star chars preceded by spaces based on
which iteration we are on and the argument number. 
*/

let triangle = (n) => {
  let counter = n;  

  while (counter >= 0) {
    console.log(`${' '.repeat(counter)}${'*'.repeat(n - counter)}`);
    counter -= 1;
  }
}


triangle(5);
triangle(9);
