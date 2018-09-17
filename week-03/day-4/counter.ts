function countDown(n: number) {
  if (n < 1) {
    throw new Error("Cannot use negative numbers");
  } else if (n === 1) {
    return 1;
  } else {
    return n + countDown(n - 1);
  }
}

let answer: number;
answer = countDown(7);

console.log(answer);