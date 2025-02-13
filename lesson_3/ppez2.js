/*
What will the following code output?
Try to answer without running the code.
*/

console.log([1, 2, 3] + [4, 5]);
/*
So, after a google... I now believe this is going to coerce the arrays to strings
and then concatenate the strings. This would then log '1, 2, 3, 4, 5' if I'm 
correctly understanding.

So my general understanding was correct, but my presumption of the string composition
was off. It very literally converts each array to strings '1, 2, 3' + '4, 5';
That operation produces the string '1, 2, 34, 5'
*/
