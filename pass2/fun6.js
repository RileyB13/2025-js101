/*
In the code shown below, identify the following:
-the function arguments
-the function body
-the function declaration
-the function invocation
-the function name
-the function parameters
-the function return value
-the names of all variables in this program
*/

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/*
arguments: 2, 3, 4
body: between the curly braces on lines 1 through 4
declaration: lines 1 through 4 starting with the function keyword
invocation: on line 6 as the value that product is being initialized to.
name: line 1 multiplyNumbers in the declaration. on line 6 multiplyNumbers in the
invocation.
parameters: line 1 => num1, 2 & 3
return value: whatever value is saved in the result variable when the function
terminates. On line 6 this is the value we are initializing product to.
variables: multiplyNumber, num1, 2, 3, result, product.