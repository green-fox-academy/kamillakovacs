import { Animal } from './animal'
import { BreedsWithEggs} from './breedswitheggs'

'use strict'

export class Bird extends Animal implements BreedsWithEggs {
  isLoud: boolean;

  constructor(name: string) {
    super(name)
  }
  
  breed(): string {
    return `making eggs.`
  }

  
  
}