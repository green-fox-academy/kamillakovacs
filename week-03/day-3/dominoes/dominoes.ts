import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}
let dominoes = initializeDominoes();

function reorderDominoes(list: Domino[]) {
  let newDominoes: Domino[] = [];
  newDominoes.push(dominoes[0]);
  dominoes.slice[0];
  for(let i = 1; i < dominoes.length; i++) {
   if (newDominoes[i-1].values[1] = dominoes[i].values[0]) {
        newDominoes.push(dominoes[i]);
        dominoes.slice[0];
    }
  }
  //return newDominoes;
  console.log(newDominoes);
}

reorderDominoes(dominoes);  

/*
function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}
*/



/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);