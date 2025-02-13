/*
Consider these two simple functions:
What will the following function invocation return?
*/

function foo(param = "no") {
  return "yes";
}

function bar(param = "no" {
  return param === "no" ? "yes" : "no";
})

bar(foo());

//this returns "no";