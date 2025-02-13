/*
Create an array from the keys of the object below, with all of teh keys converted
to uppercase. Your implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let upKeys = keys.map(function(key) {
  return key.toUpperCase();
})

console.log(upKeys);
console.log(obj);
