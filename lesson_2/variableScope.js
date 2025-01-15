//Series of exercises solidifying the rules and ideas surrounding the concept
//of variable scope.

/*
Question 1
This will log 10 to the console. num is a global variable, and is not shadowed
by another variable in the inner scope.
*/
/*
Question 2
This will log 5 and then 10 to the console. num is global and accessible inside
the function. It is logged in the function invocation, that function also reassigns
num, and that new value is logged with the console.log statement.
*/
/*
Question 3
This will log 5 to the console. The global num is shadowed by the num declared
within the scope of the function, so it is unaffected by the function. The num 
variable declared inside the function is not available in the global scope,
and when the program attempts to log the num variable it is choosing from the 
global scope.
*/
/*
Question 4
Okay this one is the hard one. I believe that this logs a ReferenceError. So you
have a case of variable shadowing here. But the variable doing the shadowing
hasn't been declared yet at the time when the function is attempting to log its
value. This is called a temporal deadzone. It's like hoisting.
*/
/*
Question 5
This will log 5 to the console. The num parameter shadows the global variable 
within the scope of the function. So the global variable is unaffected by the 
function and the value it was initialized with is logged to the console.
*/
/*
Question 6
This should log 3. num is a global variable being incremented by this while loop.
The while loop has not established its own num variable within its inner scope to
shadow.
*/
/*
Question 7
This will log 1 to the console. The while loop declares its own num variable in 
its inner scope meaning that the one being logged to the console in our global
scope is the one being initialized on line 1 and boxed out of our while loop 
via variable shadowing.

--EDIT-- This was the only question I got incorrect. What I learned is that 
the conditional for the while loop is considered to be in the global scope.
*/
