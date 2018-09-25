'use strict';

// const addTwoNumbers = (a, b) => {
//   return a + b;
// }

// module.exports = {addTwoNumbers}

const highCard = (hand1, hand2) => {
  let spaceOut = hand1.split(' ').join()
  console.log(spaceOut)  
  for (let i = 0; i < 14; i++) {
    if (i % 3 === 0) {
      let temp = hand1.slice(i, i + 1);
    }
  }  
  console.log(temp)
  let firstHand = spaceOut.split('');
  // let J = 11;
  // let Q = 12; 
  // let K = 13;
  // let A = 14;
  let newArray = [];
  
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      newArray.push(firstHand[i]);
    }
  }
  return newArray;
}

console.log(highCard('2H 3D 5S 9C KD', '2C 3H 4S 8C AH'));
