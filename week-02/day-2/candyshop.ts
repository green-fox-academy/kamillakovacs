'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

/*function sweets(list1) {
    list1.splice(1, 1, "Croissant");
    list1.splice(3, 1, "Ice cream");
    console.log(list1);
}

sweets(shopItems);

export = sweets;*/



function sweets(list) {
    if (list.indexOf(2) != -1 && list.indexOf(false) != -1) {
    list.splice(1, 1, "Croissant");
    list.splice(3, 1, "Ice cream");
    console.log(list);
    };
};

sweets(shopItems);