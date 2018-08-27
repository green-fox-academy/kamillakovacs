import { Fleet } from './fleet'
import { Thing } from './thing'
import {FleetOfThings} from './fleetofthings'

let fleet: Fleet = new Fleet();
let listOfThings: Thing[] = [];
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

