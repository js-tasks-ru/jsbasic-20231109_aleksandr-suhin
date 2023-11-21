function getMinMax(str) {
  let numbers = str
    .split(' ')
    .filter(item => isFinite(item));
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}

// let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
// console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }