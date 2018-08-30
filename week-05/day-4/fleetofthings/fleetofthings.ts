import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet: Fleet = new Fleet();
let milk: Thing = new Thing(`Get milk`);
let obst: Thing = new Thing(`Remove the obstacles`);
let stand: Thing = new Thing(`Stand up`);
let lunch: Thing = new Thing(`Eat lunch`);

fleet.add(milk);
fleet.add(obst);
fleet.add(stand);
fleet.add(lunch);

stand.complete();
lunch.complete();

for (let i: number = 0; i < fleet.things.length; i++) {
  fleet.things[i].print()
}


/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */