//I deleted all my stuff so now I'm just gonna freewheel the program.

let lastChar = (text) => {
  return text[text.length - 1];
}

let isLowerCaseChar = (char) => {
  return char <= 'z' && char >= 'a';
}

let isUpperCaseChar = (char) => {
  return char <= 'Z' && char >= 'A';
}

let cleanup = (jumbleString) => {
  let result = '';

  for (let i = 0; i < jumbleString.length; i += 1) {
    if (isLowerCaseChar(jumbleString[i]) || isUpperCaseChar(jumbleString[i])) {
      result += jumbleString[i];
    } else if (i === 0 || lastChar(jumbleString[i]) !== ' ') {
      result += ' ';
    }
  }

  return result;
}


console.log(cleanup("---what's my +*& line?"));