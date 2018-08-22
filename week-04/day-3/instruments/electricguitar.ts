import { Instrument } from "./instrument"
import { StringedInstrument } from "./stringedinstrument"

'use strict'

export class ElectricGuitar extends StringedInstrument {
  protected soundOfInstrument: string;

  constructor(name: string, numberOfStrings: number = 6) {
    super(name, numberOfStrings);
    this.name = 'electric guitar';
    this.soundOfInstrument = 'Twang';
  }

  sound(): string {
    return this.soundOfInstrument;
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.soundOfInstrument}`);
  }
}
