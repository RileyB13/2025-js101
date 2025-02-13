/*
What will the following code output?
*/

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
This will log the same array that appears on line 1, unchanged by the assignment
on line 3 because arr2 points to a shallow copy of arr1.

I have now learned what shallow copy and deep copy mean. Shallow copy means any
subobjects that exist are not "duplicated". They are the same object being pointed
to in the original.

Deep copying duplicates even subobjects/subarrays so that the copies are entirely
separate values.

This will mutate the first element in arr1 to {first: 42} because the first 
elements in both arrays point to the same subobject.
*/
