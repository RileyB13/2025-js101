/*
Explain the output of the following code and the concepts involved.
*/

let a = 'Hello';

function changeA() {
  a = 'Goodbye';
}

changeA();
console.log(a);

/*
On line 1 we variable a is declared and initialized with a value of 'Hello'.
On line 3 we use a function declaration to define a function with no parameters 
called changeA. On line 4, the body of our changeA function is going to attempt to
reassign the value of our global a variable to 'Goodbye'. There is no explicit 
return value for this function. Its only effect is that, when called, it will 
reassign the value of a. On line 7 our changeA function is invoked, and a is
reassigned. 'Goodbye' is the new value of a, and that is the value logged to the
console on line 8.
*/
