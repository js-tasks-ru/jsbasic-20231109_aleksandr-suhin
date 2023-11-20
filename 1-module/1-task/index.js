function factorial(n) {
  // ваш код...
  let result = 1;
  for (let i = 1; i <= n; i++) { // выведет 0, затем 1, затем 2
    result *= i;
  }
  return result;
}
