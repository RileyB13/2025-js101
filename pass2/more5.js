/*
What does the following function do?
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
This function takes a string as an argument. Passed string is split into an array
of character groupings delimited by any spaces in the string. This array's order
is reversed. This reversed array is iterated through with map, returning a new 
array of the lengths of the caller's string elements. This reversed array of
lengths is returned.
*/
