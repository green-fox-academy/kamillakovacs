import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet: Fleet = new Fleet();
let milk: Thing = new Thing(`Get milk`, false);
let obstacles: Thing = new Thing(`Remove the obstacles`, false);
let stand: Thing = new Thing(`Stand up`, true);
let lunch: Thing = new Thing(`Eat lunch`, true);
 
export class FleetOfThings extends Thing {
  

  constructor(name: string, completed: boolean) {
    super(name, completed)
  
  }

  print() {
  fleet.add(milk);
  
    
  }
}

console.log(print());