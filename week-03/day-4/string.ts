let temp: string;

function string(aString: string) {
  if (aString.indexOf('x') === -1) {
    return aString;
  } else {
    aString = aString.replace('x', 'y')
    return string(aString);
  }
}

console.log(string('xxxXXXxxxXXX'));