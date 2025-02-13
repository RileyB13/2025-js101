/*
Write a function, evenOrOdd, that determines whether its argument is an even
number. If it is, the fucntion should log 'even' to the console; otherwise, it 
should log 'odd'. For now, assume that the argument is always an integer.
*/ 

let evenOrOdd = (int) => {
  if (!Number.isInteger(int)) {
    console.log('ERROR: NON-INTEGER ARGUMENT');
    return;
  }

  console.log(int % 2 === 0 ? 'even' : 'odd');
} 
