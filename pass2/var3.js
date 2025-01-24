/*
What happens when you run the following program? Why do we get that result?
*/

{
  let foo = 'bar';
}

console.log(foo);

//This will raise a reference error. The foo variable is not accessible in the
//global scope as it was defined with the let keyword inside a block.