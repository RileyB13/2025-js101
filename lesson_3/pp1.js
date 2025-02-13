/*
Will the code below raise an error?
*/

let numbers = [1, 2, 3];
numbers[6] = 5;

//No, this will initialize an element at index 6 while filling in the indeces
//between this new element and the previous last element with "holes", "gaps", or 
//"empty slots" of unset elements.

//Bonus will return undefined despite the fact that the element at that index is
//unset and hasn't even been initialized with that value yet.