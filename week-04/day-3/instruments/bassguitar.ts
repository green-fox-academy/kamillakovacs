import { StringedInstrument } from "./stringedinstrument"

'use strict'

export class BassGuitar extends StringedInstrument {
  protected soundOfInstrument: string;

  constructor(numberOfStrings: number = 4) {
    super(numberOfStrings);
    this.name = 'bass guitar';
    this.soundOfInstrument = 'Dum Dum Dum';

  }
  sound(): string {
    return this.soundOfInstrument;
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfInstrument}`);
  }
}
