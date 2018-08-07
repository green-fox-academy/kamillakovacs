'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

function candy(eachStudent: any) {
    let studentCandies: number = 0;
    eachStudent.forEach(elem => {
        studentCandies += elem.candies
    });
    console.log(studentCandies);
};

candy(students);



// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function fiveCandy(fiveStudent: any) {
    let studentAge: number = 0;
    fiveStudent.forEach(elem => {
        if (elem.candies < 5) {
        studentAge += elem.age;
        }
    });
console.log(studentAge);
};

fiveCandy(students);