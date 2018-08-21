export class Aircraft {
  protected type: string;
  protected ammo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;
  constructor(type: string, baseDamage: number, maxAmmo: number) {
    this.type = type;
    this.ammo = 0;
    this.baseDamage = baseDamage;
    this.allDamage = 0;
    this.maxAmmo = maxAmmo;
  }

  fight() {
    this.ammo = 0;
    this.baseDamage = this.baseDamage * this.ammo;
    this.allDamage = this.allDamage += this.baseDamage;
    return this.baseDamage;
  }

  refill(refillAmmoAmount: number) {
    if (this.ammo + refillAmmoAmount < this.maxAmmo) {
      return this.ammo + refillAmmoAmount;
    } else if (this.ammo + refillAmmoAmount >= this.maxAmmo) {
      return this.ammo + refillAmmoAmount - this.maxAmmo;
    }
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`
  }

  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else if (this.type === 'F16') {
      return false;
    }
  }
}

let aircraft1: Aircraft = new Aircraft('F16', 30, 8);

console.log(aircraft1.refill(300));

