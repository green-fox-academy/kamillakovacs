'use strict';

class DiceSet {
  numberOfDice: number;
  diceResults: number[];
  finalDice: number[];

  constructor(numberOfDice: number = 6) {
    this.numberOfDice = 6;
    this.diceResults = [];
    this.finalDice = [];
  }

  public roll(): number[] {
    let newDiceResults: number[] = [];
    let sixResult: number[] = [];
    for (let i = 1; i <= this.numberOfDice; i++) {
      let dieResult: number = Math.floor(Math.random() * 7);
      if (dieResult === 6) {
        sixResult.push(dieResult);
      } else {
        newDiceResults.push(dieResult);
      }
    }
    this.diceResults = newDiceResults;
    this.finalDice = sixResult;
    if (this.finalDice.length > 0) {
      this.numberOfDice -= this.finalDice.length;
    }
    return this.diceResults;
  }

  public getCurrent(): number[] {
    let currentRoll: number[] = [];
    this.diceResults.forEach(number => {
      currentRoll.push(number);
    })
    this.finalDice.forEach(number => {
      currentRoll.push(number);
    })
    return currentRoll;
  }

  public reroll(): number[] {
    let sixResult: number[] = [];
    do {
      for (let i = 1; i <= this.numberOfDice; i++) {
        let dieResult: number = Math.floor(Math.random() * 7);
        if (dieResult === 6) {
          sixResult.push(dieResult);
          this.numberOfDice --;
        } 
      }
    }
    while (this.numberOfDice > 0);
    let finalList: number[] = sixResult.concat(this.finalDice)
    return finalList;
  }
}

let diceSet = new DiceSet();

diceSet.roll();
// console.log(diceSet.getCurrent());
console.log(diceSet.reroll());