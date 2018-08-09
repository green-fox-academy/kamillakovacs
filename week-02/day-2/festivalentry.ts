'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival



function securityCheck(list) {
    list.forEach(elem => {
        if (elem.guns > 0 && elem.alcohol === 0) {
            elem.guns = 0;
            watchlist.push(elem.name);
        } else if (elem.guns === 0 && elem.alcohol > 0) {
            securityAlcoholLoot += elem.alcohol;
            elem.alcohol = 0;
        } else if (elem.guns > 0 && elem.alcohol > 0) {    
            securityAlcoholLoot += elem.alcohol;
            elem.alcohol = 0;
            elem.guns = 0;
            watchlist.push(elem.name);
        }
    });
    console.log(list);
    console.log(watchlist);
    console.log(securityAlcoholLoot)
};

securityCheck(queue);

export = securityCheck;