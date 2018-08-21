import { Person } from "./person"
import { Student } from "./student"
import { Mentor } from "./mentor"

export class Cohort {
  cohortName: string;
  students: Student[];
  mentors: Mentor[];

  constructor(cohortName: string = "Jane Doe") {
    this.cohortName = cohortName;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor)
  }

  info() {
    console.log(`The ${this.cohortName} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}