function bunny2(numberOfBunnies) {
  if (numberOfBunnies < 1) {
    return null;
  } else if (numberOfBunnies % 2 === 0) {
    return 3 + bunny2(numberOfBunnies - 1);
  } else {
    return 2 + bunny2(numberOfBunnies - 1);
  }
}

console.log(bunny2(10));


