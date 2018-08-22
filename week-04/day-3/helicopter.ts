import { Vehicle } from './vehicle'
import { Flyable } from './flyable'

export class Helicopter extends Vehicle implements Flyable {


  fly() {
    console.log(`I am so high`);
  }

  land() {
    console.log(`I have landed`);
  }

  takeOff() {
    console.log(`Taking off`);
  }
}

let helicopter1: Helicopter = new Helicopter(2, true, 'helike');

helicopter1.fly();
helicopter1.land();
helicopter1.takeOff();