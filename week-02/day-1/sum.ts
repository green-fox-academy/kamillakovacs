
export{}

let parameter: number = 25;

function sum(parameter: number) {
    let summary: number = 0;
    for(let i = 1; i <= parameter; i++) {
        summary +=i;
    };
    return summary;
}

console.log(sum(parameter));



// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result