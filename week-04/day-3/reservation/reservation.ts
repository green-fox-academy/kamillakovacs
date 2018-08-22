import { Reservationy } from "./reservationy";

'use strict'

export class Reservation implements Reservationy {
  getDowBooking(): string {
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let dOW: string[] = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
    let randomString: string = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    let bookingNumber = randomString.slice(0, 8);
    let randomDay = dOW[Math.floor((Math.random()*dOW.length))];
    return `Booking# ${bookingNumber} for ${randomDay}`;
    
  }  
  
  getCodeBooking(): string {
    return `Booking# ${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`;
  }


}

let newRes: Reservation = new Reservation;

console.log(newRes.getDowBooking());