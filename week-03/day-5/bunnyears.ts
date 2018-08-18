

function bunnyEars(numberOfBunnies: number) {
  if (numberOfBunnies === 1) {
    return numberOfBunnies * 2;
  } else {
    return 2 + bunnyEars(numberOfBunnies - 1);
  }
};

console.log(bunnyEars(40));

