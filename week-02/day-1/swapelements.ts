let abc = ["Arthur", "Boe", "Chloe"];
let temp0 = abc[0];
let temp2 = abc[2];
abc.splice(2, 1, temp0);
abc.splice(0, 1, temp2);

console.log(abc);




// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`