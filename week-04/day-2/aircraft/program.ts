import { Aircraft } from "./aircraft"
import { F16 } from "./f16"
import { F35 } from "./f35"

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