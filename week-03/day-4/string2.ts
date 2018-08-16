function string2(aString: string) {
  if (aString.indexOf('x') === -1) {
    return aString;
  } else {
    aString = aString.replace('x', '');
    return string2(aString);
  }
}

console.log(string2('YYYxxxYYYzzz'));