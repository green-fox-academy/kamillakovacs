function power(base: number, exponent: number) {
  let result: number = 1;
  for(let i: number = 0; i < exponent; i++) {
    result *= base; 
  }
  return result;
}

console.log(power(3,4));

//pwoer(3,2) --> 3*3
//power(4,3) --> 4*4*4

function powerN(base: number, exponent: number): number {
  if (exponent == 1) {
    return base;
  } else {
    return base * powerN(base, exponent - 1);
  }
}

console.log(powerN(2, 4));