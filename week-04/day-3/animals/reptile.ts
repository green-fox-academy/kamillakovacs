import { Animal } from "./animal";

'use strict'

export class Reptile extends Animal {
  livesInWater: boolean;

  constructor(name: string) {
    super(name)
  }
  
  breed(): string {
    return `making eggs.`
  }

  
}