export { };

let temp1: string;
let temp2: string;
let thisString: string = 'Hello this is Kamilla'
function string3(aString: string) {
  aString = '*' + aString;
  if (aString.lastIndexOf('*') < aString.length) {
    temp1 = aString.slice(aString.lastIndexOf('*') + 1, aString.length);
    temp2 = aString.slice(0, aString.lastIndexOf('*'));
    aString = aString.concat(temp2 + '*' + temp1 + '*');
    return string3(aString);
  } else {
    return aString;
  }
}

console.log(string3(thisString));