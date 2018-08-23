'use strict'

export abstract class Vehicle {
  protected seatNumber: number;
  protected canFly: boolean;
  protected name: string;

  constructor(seatNumber: number, canFly: boolean, name: string) {
    this.seatNumber = seatNumber;
    this.canFly = canFly;
    this.name = name;
  }
}