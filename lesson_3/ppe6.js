/*
Suppose we build an array like this:
This code will create a nested array that looks like this:
Nesting data structures like we do here is commonplace in JS and programming in
general. We'll explore this in much greater depth in a future lesson.

Create a new array that contains all of the above values, but in an un-nested format:
*/
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flatstones = flintstones.flat();

console.log(flatstones);