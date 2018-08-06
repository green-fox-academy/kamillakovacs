
function printParams(...numbers: number[]) {
    numbers.forEach(elem => {
        console.log(elem);
    });
}

printParams(10, 20, 30, 40, 50, 60);

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)