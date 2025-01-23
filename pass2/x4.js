//Basic X4
/*
Explain why this code logs '510' instead of 15.
*/

console.log('5' + 10);

//When we call the log method on the console object, it is looking to display
//the return value of the expression that has been passed to it as an argument.
//The argument we have passed is a string '5', the binary + operator, and the
//number 10. If the + operator has a string as one of its operands, as it does
//in this expression, then it will attempt to coerce the non-string operand 
//to a string and then perform concatenation.