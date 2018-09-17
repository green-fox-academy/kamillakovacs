// function refactorio(thisArray) {
//   let answer = 0;
//   for(let i = thisArray.length - 1; i > 0; i-- ) {
//     thisArray[i] + refactorio(thisArray[i - 1]);
//   };

// };

let anArray = [1, 2, 5, 10].reduce((a, b) => a + b, 0);
let anotherArray = [1, 2, 5, 10].reduce((a, b) => a * b);

function multiply (myArray) {
  return myArray.reduce((a, b) => a * b)
} 

function sum (myArray) {
  return myArray.reduce((a, b) => a + b)
} 

function double (myArray) {
  let doubleArray = [];
  for (let i = 0; i < myArray.length; i++) {
    doubleArray.push(myArray[i] * 2);
  }
  return doubleArray;
}

console.log(anArray);
console.log(anotherArray)
console.log(multiply([1, 2, 5, 10]));
console.log(sum([1, 2, 5, 10]));
console.log(double([1, 2, 5, 10]));