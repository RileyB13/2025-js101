/*
Consider the following code:

As written, this code will raise an error on line 5. Without modifying foo, update
this code to print the desired text.
*/
function bar(arg) {
  return arg;
}

function foo(bar) {
  console.log(bar());
}

foo("Welcome");
foo(3.1415);
foo([1, 2, 3]);