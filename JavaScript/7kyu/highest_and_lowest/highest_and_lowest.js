function highAndLow(numbers) {
  return [
    Math.max(...numbers.split(' ')),
    Math.min(...numbers.split(' '))
  ].join(' ');
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
