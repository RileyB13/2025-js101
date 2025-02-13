/*
Can you identify all of the variables, primitive values, and objects in the
following code?
*/

function boo(scare) {
  let myBoo = scare.toUpperCase() + '!!!';
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
}

let myBoo = boo(halloweenCollection["greet"]);

/*
variables: boo, scare, myBoo, halloweenCollection, myBoo again
prims: myBoo(local string), greet, scare, wish, "Happy Halloween", "Boo", "May all your
pumpkins be glowing", myBoo(global undefined) 
objs: boo, halloweenCollection
*/
