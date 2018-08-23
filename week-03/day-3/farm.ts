import { Animal } from "./animal";

'use strict'

export class Farm {
  numberOfFreePlaces: number 
  animalList: Animal[];
  hungerList: number[];

  constructor(numberOfFreePlaces: number) {
    this.numberOfFreePlaces = numberOfFreePlaces;
    this.hungerList = [];
  }

  breed() {
    if(this.numberOfFreePlaces > 0) {
      let newAnimal: Animal = new Animal;
      this.animalList.push(newAnimal);
    } 
  }

  slaughter() {
    this.animalList.forEach(e => {
      this.hungerList.push(e.hunger);
    })
    console.log(Math.max(1, 2, 3, 4));
    
  }
  
 
}

let bigFarm: Farm = new Farm(5);

let parrot: Animal = new Animal;
this.animalList.push(parrot);
let snake: Animal = new Animal;
this.animalList.push(snake);
let bear: Animal = new Animal;
this.animalList.push(bear);

snake.eat();
bear.drink();
parrot.eat();
snake.eat();

bigFarm.slaughter();
