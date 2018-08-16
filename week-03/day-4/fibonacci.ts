function fibonacci(n: number): any {
  if (n < 0) {
    return 1;
  } else {
  return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(13);


// 0 + 1 = 1