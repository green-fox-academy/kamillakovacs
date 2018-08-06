export{}

let factorial: number = 5;

function factorio(factorial: number) {
    let multipliers: number = 1;
    for(let i = 1; i <= factorial; i++) {
        multipliers = multipliers *= i;
    };
    return multipliers;
}

console.log(factorio(factorial));

// -  Create a function called `factorio`
//    that returns it's input's factorial