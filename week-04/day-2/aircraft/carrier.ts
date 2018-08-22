import { Aircraft } from "./aircraft"

export class Carrier {
  protected ammoStore: number;
  protected aircraftStore: Aircraft[];
  protected healthPoint: number;

  constructor(healthPoint: number, ammoStore: number) {
    this.healthPoint = healthPoint;
    this.aircraftStore = [];
    this.ammoStore = ammoStore;

  }

  add(Aircraft) {
    this.aircraftStore.push(Aircraft);
  }

  fill() {
    this.aircraftStore.forEach(elem => {
      let ammoNeed: number = elem.maxAmmo -= elem.ammo

      if (elem.ammo < elem.maxAmmo) {
        this.ammoStore = this.ammoStore -= ammoNeed;
        elem.ammo = elem.maxAmmo;
        ammoNeed -= ()
        return this.ammoStore;

      } else if (elem.ammo >= elem.maxAmmo) {
        return this.ammoStore;

      } else if (this.ammoStore < (elem.maxAmmo -= elem.ammo)) {
        this.ammoStore = 0;
        throw new Error("Insufficient ammo");
      
      } else if (elem.isPriority) {
        
      }
    })
    console.log(this.ammoStore);
  }

  // fight(anotherCarrier) {

  // }

  // getStatus() {
    
  // }
}

let newCarrier: Carrier = new Carrier(100, 20);

let aircraft1: Aircraft = new Aircraft('F35', 50, 12);
let aircraft2: Aircraft = new Aircraft('F16', 30, 8);
let aircraft3: Aircraft = new Aircraft('F16', 30, 8);

newCarrier.add(aircraft1);
newCarrier.add(aircraft2);
newCarrier.add(aircraft3);

newCarrier.fill();