import { Instrument } from "./instrument";

'use strict'

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;
}