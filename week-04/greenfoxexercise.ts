class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + ".");
  }

  getGoal() {
    console.log("My goal is: Live for the moment!");
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = "The School of Life", skippedDays: number = 0) {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    console.log("Be a junior software developer.")
  }

  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
  }

  skipDays(numberOfDays) {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}

class Mentor extends Person {
  level: string;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  getGoal() {
    console.log("Educate brilliant junior software developers.")
  }

  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " " + this.level + " mentor.");)
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;
  constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', company = 'Google', hiredStudents = 0) {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " who represents " + this.company + " and hired " + this.hiredStudents + " students so far.");
  }

  hire() {
    this.hiredStudents++;
  }

  getGoal() {
    console.log("Hire brilliant junior software developers.")
  }
}