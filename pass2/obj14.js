/*
Identify all of the variables, object property names, primitive values, and objs
shown in the following code. 
*/

function hello(greeting, name) { //hello, greeting, name
  return greeting + ' ' + name; //greeting, name, ' '
}

function xyzzy() { //xyzzy
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; //a, b, c, d, 0, 1, 2, [3, 4, 5] {}
}

const howdy = hello('Hi', 'Grace'); //howdy, hello
let foo = xyzzy(); //foo, xyzzy5