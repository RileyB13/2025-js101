/*
Rolling buffer. You can add and remove elements from a rolling buffer.
However, once the buffer becomes full, any new elements will displace the oldest
elements in the buffer.

Prefer push() or concat() for modifying the buffer?

Is there a difference between these implementations, other than the method used
to add an element to the buffer? You may assume that newElement will always be a
primitive value.
*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*
concat method returns a new array made of the caller array and the passed elements.
push method mutates the caller array by adding the passed elements to it.
*/
