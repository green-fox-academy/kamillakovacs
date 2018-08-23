import { Test } from 'tape'

'use strict'

export abstract class Animal {
  name: string;
  age: number;
  isHungry: boolean;
  bites: boolean;
  canFly: boolean;
  
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract breed(): string;
}
