/*
What does the following code log to the console?
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//This logs nothing to the console. The function called on line 7 returns before
//it ever makes it to that method call.