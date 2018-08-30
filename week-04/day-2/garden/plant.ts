import { Garden } from './garden'

export abstract class Plant extends Garden {
  

  constructor(name: string, waterAmount: number) {
    super(name, waterAmount);
    
  }

  abstract needsWater(): boolean;

}