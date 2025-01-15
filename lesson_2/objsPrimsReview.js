//Review: Objects vs. Primitives
/*
Question 1
This will log 'Hello'. We never capture the return value from performing 
the concatenation, and because myWord points to a primitive string value, 
it remains unchanged by the operation.
*/
/*
Question 2
This will log 'Hello' 3 times.
*/
/*
Question 3
This will log ['Hello', 'Goodbye'] to the console. myWords variable references an 
array which is mutated by the push method.
*/
/*
Question 4
This will log an array ['Hello'], and I should read the effects of methods 
and functions much more diligently in the documentation.
*/
/*
Question 5
We still aren't catching this return value from the .toUpperCase(); method. Logs
the array ['Hello'] to the console.
*/
/*
Question 6
This is going to log ['HELLO'] to the console. We're capturing the value of the
operation being performed by reassigning the element at index 0 of the myWords
array to the return value of invoking the .toUpperCase() method on the string
currently at that location.
*/

