function filterRange(arr, a, b) {
  // ваш код...
  if (!isFinite(a) || !isFinite(b)) return arr;
  return arr.filter(item => item >= a && item <= b)
}


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // [3,1] (совпадающие значения)
// console.log(arr); // [5,3,8,1] (без изменений)