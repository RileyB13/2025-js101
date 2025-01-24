/*
Using the code from ex9, are the left and right variables on lines 1 and 2 the
same as the left and right variables on lines 10-12? Explain.


No they are not. The variables on lines 1 & 2 are parameters, and thus are local
variables that only exist within the scope of the function declaration as
placeholders for future values called arguments that will be passed in upon 
invocation. Lines 10-12 are global variables that exist outside of the function
scope, and we happen to be passing them in as arguments to the multiply function
call.
*/
