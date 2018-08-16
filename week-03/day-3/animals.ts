class Animal {
  hunger: number;
  thirst: number;
  constructor(hunger: number, thirst: number) {
    this.hunger = 50;
    this.thirst = 50;
  }
  eat() {
    this.hunger = this.hunger - 1;
  }

  drink() {
    this.thirst = this.thirst - 1;
  }

  play() {
    this.hunger = this.hunger + 1;
    this.thirst = this.thirst + 1;
  }
}

