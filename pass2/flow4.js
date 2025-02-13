/*
What does the following code log to the console, and why?
*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
This code logs 'Product2', then logs 'Product3', then logs 'Product not found!'.
This switch statement experiences fall-through due to its lack of break statements
in its case clauses. It finds the first matching clause, evaluates the associated
statements and expressions, and then does the same for all subsequent clauses 
until it reaches the end of the switch statement.
*/
