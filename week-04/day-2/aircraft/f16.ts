import { Aircraft } from "./aircraft"

export class Carrier {
  aircraft: string;
  aircraftAmmo: number;
  ammo: number;
  healthPoint: number;
  store: Aircraft[];

  constructor(ammo: number, healthPoint: number) {
    this.ammo = ammo;
    this.healthPoint = healthPoint;
  }

  add() {
    this.store.push(this.aircraft);
  }

  fill() {
    this.ammo =
  }
}