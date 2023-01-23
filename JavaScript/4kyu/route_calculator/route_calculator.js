const calculate = function (sum) {
  const result = sum
    .split('+')
    .map((s) =>
      s.split('-')
        .map((s) =>
          s.split('*')
            .map((s) =>
              s.split('$')
                .map(Number)
                .reduce((a, b) => a / b))
            .reduce((a, b) => a * b))
        .reduce((a, b) => a - b))
    .reduce((a, b) => a + b);
  return isNaN(result) ? '400: Bad request' : result;
};
