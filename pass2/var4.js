/*
What happens when you run the following code? Why?
*/

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*
This code will greet Victor 3 times before encountering an error on line 6,
which prevents it from greeting Joe.

You will get a type error, because you cannot use assignment on variables
declared with the const keyword.