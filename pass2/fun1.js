/*
What does this code log to the console? Does executing the foo function affect the
output? Why or why not?
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
On line 1 we initialize a variable bar with a value of 1. Line 2 we declare a 
function foo that takes no arguments. The body of foo() consists of a single line
that declares its own locally scoped bar variable and initializes it with a value
of 2. When foo() is called on line 6 it creates the locally scoped bar variable
and then terminates returning an implicit value of undefined and destroying the 
local variable. On line 7 the console.log method is passed the global bar variable
bound to the value of 1 as its argument. 1 is logged to the console.