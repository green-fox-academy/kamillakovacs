import { Aircraft } from './aircraft'

export class Carrier {
  protected ammoStore: number;
  protected aircraftStore: Aircraft[];
  protected healthPoint: number;
  protected allDamage: number;

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
     let aircraftAmmoNeed: number = elem.maxAmmo -= elem.ammo;
    
      if (elem.ammo < elem.maxAmmo && elem.isPriority()) {
        this.ammoStore -= aircraftAmmoNeed;
        elem.ammo += aircraftAmmoNeed;
        return this.ammoStore;

      } else if (elem.ammo < elem.maxAmmo && this.ammoStore > aircraftAmmoNeed) {
        this.ammoStore -= aircraftAmmoNeed;
        elem.ammo += aircraftAmmoNeed;
        return this.ammoStore;

      } else if (elem.ammo >= elem.maxAmmo) {
        return this.ammoStore;
        
      } else if (this.ammoStore <= aircraftAmmoNeed) {
        throw new Error("Insufficient ammo");
      }

    });
 
  }


  fight(anotherCarrier: Carrier): number {
    let damage: number = 0;
    this.aircraftStore.forEach(e => {
      damage += e.ammo 
      return damage;
    })
    anotherCarrier.healthPoint -= damage;
    this.ammoStore = 0;
    return anotherCarrier.healthPoint;
  }

  getStatus() {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircraftStore.length}, Ammo storage: ${this.ammoStore}, Total Damage: ${this.allDamage}`);
    this.aircraftStore.forEach(e => {
      console.log(`Type: ${e.type}, Ammo: ${e.ammo}, Base Damage: ${e.baseDamage}, All Damage: ${e.allDamage}`)      
    })
  }
      
};

let newCarrier: Carrier = new Carrier(100, 50);
let otherCarrier: Carrier = new Carrier(500, 500)

let aircraft1: Aircraft = new Aircraft('F35', 50, 12);
let aircraft2: Aircraft = new Aircraft('F16', 30, 8);
let aircraft3: Aircraft = new Aircraft('F35', 50, 12);

newCarrier.add(aircraft1);
newCarrier.add(aircraft2);
newCarrier.add(aircraft3);

newCarrier.getStatus();