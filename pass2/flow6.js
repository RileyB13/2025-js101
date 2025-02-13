/*
What does this code output to the console?
*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
This will output 'Not Empty' to the console. Empty arrays are considered truthy
values, so when an empty array is passed as the argument to this function, it 
will evaluate as true and the statements and expressions associated with our if
statement's first clause will be evaluated.
*/
