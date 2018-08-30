import { Garden } from './garden'
import { Plant } from './plant';

export class Tree extends Plant {
  protected waterAmount: number
  protected plantType: string

  constructor(name: string, waterAmount: number) {
    super(name, waterAmount);
    this.plantType = `Tree`;
  }

  needsWater() {
    if (this.waterAmount < 10) {
      return true;
    } else {
      return false;
    }
  }


}