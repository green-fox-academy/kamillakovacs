function fibonacci(number: number) {
  if (number < 0) {
    return 1;
  } else {
  return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(6));


0
1
0 + 1 = 1
1 + 1 = 2
2 + 1 = 3
3 + 2 = 5
5 + 3 = 8

(8 - 5) + (8 - 3) = 3 + 5
