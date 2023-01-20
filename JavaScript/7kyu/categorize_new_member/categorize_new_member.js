// solution with reduce
function openOrSenior(data) {
  return data.reduce((acc, [age, handicap]) => {
    (age > 54 && handicap > 7) ? acc.push('Senior') : acc.push('Open');

    return acc;
  }, []);
}

// solution with map
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}

const input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9]
];

console.log(openOrSenior(input)); // output = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'];
