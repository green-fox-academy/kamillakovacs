'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable
let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

 // let newMessage: string[] = array2.map(String);
  //console.log(newMessage);



function message(array1, array2) {
  let temp = [];
  let newList: string[] = Object.keys(array1);
  let newListNumber = newList.map(Number);
  console.log(newListNumber);
  console.log(array2);
  array2.forEach(elem => {
    if(array2[elem] == newListNumber[elem]) {
      temp.push(elem);
      return temp;
      //out.push(array1[index]);
      //return out;
    //};
    
    }
  });
  console.log(temp);
  console.log(out);
};

message(hashmap, notSoCrypticMessage);