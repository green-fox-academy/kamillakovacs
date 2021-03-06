import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet: Fleet = new Fleet();
let milk: Thing = new Thing(`Get milk`);
let obstacles: Thing = new Thing(`Remove the obstacles`);
let stand: Thing = new Thing(`Stand up`);
let lunch: Thing = new Thing(`Eat lunch`);

fleet.add(milk);
fleet.add(obstacles);
fleet.add(stand);
fleet.add(lunch);
stand.complete();
lunch.complete();

function print() {
  things.forEach(element => {
    if(this.things[element].complete()){
      console.log(`${element}. [x] ${this.name}`);
    } else {
      console.log(`${element}. [ ] ${this.name}`);
    }
  }); 
}

console.log(print());