import { StringedInstrument } from "./stringedinstrument"

'use strict'

export class ElectricGuitar extends StringedInstrument {
  protected soundOfInstrument: string;

  constructor(numberOfStrings: number = 6) {
    super(numberOfStrings);
    this.name = 'electric guitar';
    this.soundOfInstrument = 'Twang';
  }

  sound(): string {
    return this.soundOfInstrument;
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfInstrument}`);
  }
}
