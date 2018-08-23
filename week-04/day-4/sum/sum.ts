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
