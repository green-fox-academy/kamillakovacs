import { Bird } from "./birds";
import { Reptile } from "./reptile";
import { Mammal } from "./mammal";

'use strict'

let reptile: Reptile = new Reptile("Crocodile");
let mammal: Mammal = new Mammal("Koala");
let bird: Bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());