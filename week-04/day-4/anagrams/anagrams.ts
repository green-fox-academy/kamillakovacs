'use strict'

export function Anagrams(string1: string, string2: string): boolean {
  let alpha1: string = string1.split('').sort().join();
  let alpha2: string = string2.split('').sort().join();
  let newList: string[] = [];

  if (alpha1.length !== alpha2.length) {
    return false;
  } else {
    for (let i: number = 0; i < alpha1.length; i++) {
        if (alpha1[i] === alpha2[i]) {
          newList.push(alpha1[i]);
        } else {
          return false;
        }
    }
  }
  
  if (newList.length === alpha1.length) {
    return true;
  }

} 
