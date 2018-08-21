export class Aircraft {
  type: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  constructor(type: string) {
    this.type = type;
    this.ammo = 0;

  }

  fight() {
    this.ammo = 0;
    this.baseDamage = this.baseDamage * this.ammo;
  }

  refill(refillAmmoAmount: number) {
    if (this.ammo + refillAmmoAmount < this.maxAmmo && this.ammo < refillAmmoAmount) {
      this.ammo = this.ammo + refillAmmoAmount;
      return this.ammo;
    } else if (this.ammo + refillAmmoAmount < this.maxAmmo || this.ammo > refillAmmoAmount) {
      this.ammo = this.ammo + refillAmmoAmount
      return this.maxAmmo - this.maxAmmo;
    }
  }
}

let aircraft1: Aircraft = new Aircraft('F16');

console.log(aircraft1.refill(8));