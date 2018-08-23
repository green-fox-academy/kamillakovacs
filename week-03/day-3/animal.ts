'use strict'
import { Farm } from './farm'

export class Animal {
  hunger: number;
  thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger--;
    return this.hunger;
  }

  drink() {
    this.thirst--;
    return this.thirst;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

let cat: Animal = new Animal();


let parrot: Animal = new Animal;


let snake: Animal = new Animal;


let bear: Animal = new Animal;



cat.play();
snake.eat();
bear.drink();
parrot.eat();
snake.eat();
