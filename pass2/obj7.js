/*
Add a qux property with value 3 to the myObj object we created in the previous
exercise. Now, examine the following code snippets:

Without running this code, can you determine whether these two snippets produce
the same output? Why?
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*
No these won't produce the same output. The Object.keys static method returns an
array of the passed object's OWN keys. The only element in its returned array 
should be our new qux property. for/in loop should iterate through all properties,
beginning with own properties, followed by those inherited.
*/


