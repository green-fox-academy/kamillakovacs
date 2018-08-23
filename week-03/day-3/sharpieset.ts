'use strict'

import { Sharpie } from './sharpie'

export class SharpieSet {
  sharpieList: Sharpie[];

  constructor() {

  }

  countUsable(): number {
    let usableSharpies: Sharpie[];
    usableSharpies = this.sharpieList.filter( sharpie => {
      return sharpie.getInkAmount() > 0;
    })
    return usableSharpies.length;
  }
}