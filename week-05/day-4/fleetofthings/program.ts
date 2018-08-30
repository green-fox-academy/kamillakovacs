import { Thing } from './thing'
import { Fleet } from './fleet'


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






