/*
Use object literal syntax to create an object that behaves as an array in a for
statement. The object should contain at least 3 elements. You should place your 
code between the braces in the let statement
*/

let myArray = {
  0: 'first',
  1: 'second',
  2: 'third',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//Had this one, just needed to manually add the length property. Length is built
//into arrays. Length needs to be manually added to objects.