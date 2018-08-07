'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function moreThanFour(myList: any) {
  myList.forEach(elem => {
    if(elem.candies > 4) {
      console.log(elem.name)
    }
  })
};

moreThanFour(students);

function candyAverage(myList: any) {
  let totalCandy = 0;
  myList.forEach(elem => {
    totalCandy += elem.candies/myList.length;  
  });
  console.log(totalCandy);
};
candyAverage(students);

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average