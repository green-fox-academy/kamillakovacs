import { Animal } from "./animal";

'use strict'

export class Mammal extends Animal {
  runsFast: boolean;
  nickname: string;

  constructor(name: string) {
    super(name);
  }
  
  breed(): string {
    return `making the babies.`;
  }
  
}