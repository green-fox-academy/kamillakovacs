import { notDeepEqual } from "assert";

function countLetters(string1: string): any {  
  
  let newArray = string1.toLowerCase().split('').sort();
  let finalList: string[] = [];

  for(let i: number = 0; i < newArray.length; i++) {
    if(newArray[0] === ' ') {
      newArray.splice(0, 1);
    } 
  }
  
  for(let i: number = 0; i < newArray.length; i++) {
      finalList[newArray[i]] = 0;
    }

  newArray.forEach(e => finalList[e]++);
  return finalList;
}

console.log(countLetters(`hi my name is Kamilla`));