import { Aircraft } from "./aircraft"

export class Carrier {
  aircrafts: string;
  aircraftAmmo: number;
  initialAmmo: number;
  healthPoint: number;

  constructor(initialAmmo: number, healthPoint: number) {
    this.initialAmmo = initialAmmo;
    this.healthPoint = healthPoint;
  }
}