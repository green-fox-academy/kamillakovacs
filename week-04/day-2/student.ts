import { Person } from "./person"

export class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = "The School of Life") {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0; // this is zero and not named in the constructor because when we establish a new student they will always have zero skipped days
  }

  getGoal() {
    console.log("My goal is: Be a junior software developer.");
  }

  introduce() {
    super.introduce();
    console.log(` from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}

