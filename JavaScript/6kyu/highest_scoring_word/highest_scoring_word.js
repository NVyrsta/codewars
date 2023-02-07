function high(x) {
  const findScore = (word) => {
    return [...word].reduce((acc, _,ind) => word.charCodeAt(ind) - 96 + acc, 0)
  }

  const arr = x.split(' ');
  let max = arr[0];
  let maxScore = 0;
  arr.forEach((item) => {
    if (findScore(item) > maxScore) {
      max = item;
      maxScore = findScore(item);
    }
  })

  return max;
}

high('aaa bb');// 'aaa';

// function high(s) {
//   let as = s
//     .split(' ')
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }

// function high(x) {
//   return x.split(' ').reduce((accum, current) => {
//     return score(current) > score(accum) ? current : accum;
//   });
// }

// function score(word) {
//   return word.split('').reduce((accum, current) => {
//     return accum + (current.charCodeAt() - 96);
//   }, 0);
// }

// function high(x) {
//   const alpha = 'abcdefghijklmnopqrstuvwxyz';
//   const words = x.split(' ');
//   const scores = words
//     .map((x) => [...x].map((y) => alpha.indexOf(y) + 1))
//     .map((x) => x.reduce((a, b) => a + b, 0));

//   return words[scores.indexOf(Math.max(...scores))];
// }