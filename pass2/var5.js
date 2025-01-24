/*
Take a look at this snippet of code:
& What does it log to the console? Why?
*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
This program will log 'bar' to the console, because there are two different 'foo'
variables being declared at two different scopes. Because the foo variable inside
the block is being declared, that means it is a separate variable from the one
that was declared on line one in the global scope. The only visible foo variable
to be logged to the console at the global scope is the one declared on line one.
*/
