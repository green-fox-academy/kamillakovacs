import { Reservationy } from "./reservationy";

'use strict'

export class Reservation implements Reservationy {  
  getDowBooking(): string {
    let dOW: string[] = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
    let bookingDay = dOW[Math.floor((Math.random()*dOW.length))];
    return bookingDay;
  }  
  
  getCodeBooking(): string {
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomString: string = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    let bookingNumber = randomString.slice(0, 8);
    return bookingNumber;
  }

  getBooking() {
    for(let i = 0; i < numberOfBookings; i++) {
    console.log(`Booking# ${newRes.getCodeBooking()} for ${newRes.getDowBooking()}`);
    }
  }

}

let numberOfBookings: number = 10;
let newRes: Reservation = new Reservation;

newRes.getBooking();