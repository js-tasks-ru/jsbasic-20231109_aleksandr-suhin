function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (const key in salaries) {
    const item = salaries[key];
    if (typeof item === 'number' && isFinite(item)) sum += item;
  }
  return sum;
}


// let salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// }

// console.log(sumSalary(salaries)); // 3900
