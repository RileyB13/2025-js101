/*
The following code causes an infinite loop ( a loop that never stops iterating).
Why?
*/

let counter = 0;

while (counter = 1) { // This condition isn't comparing the value, it's assigning.
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

