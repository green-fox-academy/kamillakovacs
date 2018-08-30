import { Flower } from './flower'
import { Tree } from './tree'
import { Plant } from './plant'


let roundOne: number = 0;

export abstract class Garden {
  protected name: string;
  protected plantType: string
  protected waterAmount: number;

  constructor(name: string, waterAmount: number) {
    this.name = name;
    this.waterAmount = waterAmount;
  }

  abstract needsWater(): boolean;

  showGarden() {
    if (this.needsWater()) {
      console.log(`The ${this.name} ${this.plantType} needs water`);
    } else {
      console.log(`The ${this.name} ${this.plantType} doesnt need water`);
    }
  }

  firstWatering(): void {
    if (this.needsWater()) {
      roundOne++;
      if (this.plantType === `Flower`) {
        this.waterAmount += ((40 / roundOne) * .75);
      } else if (this.plantType === `Tree`) {
        this.waterAmount += ((40 / roundOne) * .4);
      }
    }
  }

  secondWatering(): void {
    if (this.needsWater()) {
      roundOne++;
      if (this.plantType === `Flower`) {
        this.waterAmount += ((70 / roundOne) * .75);
      } else if (this.plantType === `Tree`) {
        this.waterAmount += ((70 / roundOne) * .4);
      }
    }
  }
}


