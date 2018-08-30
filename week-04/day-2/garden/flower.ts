import { Garden } from './garden'
import { Plant } from './plant';

export class Flower extends Plant {
  
  protected waterAmount: number;
  protected plantType: string

  constructor(name: string, waterAmount: number) {
    super(name, waterAmount);
    this.plantType = `Flower`;

  }

  needsWater() {
    if (this.waterAmount < 5) {
      return true;
    } else {
      return false;
    }

  }

}

