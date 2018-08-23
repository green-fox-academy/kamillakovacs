export class Something {

  constructor() {

  }

  sum(list: number[]) {
    let sumOfNumbers: number = 0;
    for (let i: number = 0; i < list.length; i++) {
      sumOfNumbers += list[i];
    }
    return sumOfNumbers;
  }
  
}

let something1: Something = new Something;
let integerList: number[] = [1, 2, 3, 4, 5];

something1.sum(integerList);