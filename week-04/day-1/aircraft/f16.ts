import { Aircraft } from "./aircraft"

export class F16 extends Aircraft {
  constructor(type: string) {
    super(type);
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }

}