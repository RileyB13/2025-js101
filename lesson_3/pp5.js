/*
What will the following code output?
*/

console.log(false == '0');
console.log(false === '0');

/*
The first line will output true. I believe both of the operands in the expression
passed to the console.log method on line 1 will be coerced to numbers and considered
equal to each other after the coercion. Line 2 will output false showing us that
the two operands are different in type, even if their values are "similar".
*/

