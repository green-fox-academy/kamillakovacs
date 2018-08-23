import { Instrument } from "./instrument";

'use strict'

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  
  constructor(numberOfStrings: number) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;
}