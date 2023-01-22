function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const total = walk.reduce(
    (acc, item) => ({
      ...acc,
      [item]: (acc[item] || 0) + 1
    }),
    {}
  );

  const n = total.n || 0;
  const w = total.w || 0;
  const s = total.s || 0;
  const e = total.e || 0;

  return n === s && e === w;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));// 'should return true'
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));// 'should return false'
console.log(isValidWalk(['w']));// 'should return false'
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));// 'should return false'
