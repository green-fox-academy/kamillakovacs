import { Instrument } from "./instrument"
import { StringedInstrument } from "./stringedinstrument"

'use strict'

export class Violin extends StringedInstrument {
  protected soundOfInstrument: string;

  constructor(name: string,numberOfStrings: number = 4) {
    super(name, numberOfStrings);
    this.name = 'violin';
    this.soundOfInstrument = 'Screech';
  }

  sound(): string {
    return this.soundOfInstrument;
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.soundOfInstrument}`);
  }
}
