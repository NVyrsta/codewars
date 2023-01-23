function persistence(num) {
  let counter = 0;
  let total = num;

  while (String(total).length != 1) {
    total = String(total)
      .split('')
      .map(Number)
      .reduce((a, b) => a * b);
    counter++;
  }

  return counter;
}

console.log(persistence(39));// 3
console.log(persistence(4));// 0
console.log(persistence(25));// 2
console.log(persistence(999));// 4
