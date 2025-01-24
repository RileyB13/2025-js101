/*
Will this program produce an error when run? Why or why not?
*/

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
No it will not. Variables declared with const have scope as well as those declared
with let. These are two different variables in two different scopes.