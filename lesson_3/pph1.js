/*
Will the following functions return the same results?
Try to answer without running the code or looking at the solution.
*/
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

/*
first() will return an object {prop1: "hi there"} and log that object to the console.
second() will return undefined implicitly and that will be logged to the console.
*/
