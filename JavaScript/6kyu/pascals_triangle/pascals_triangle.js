function pascalsTriangle(n) {
  const res = [1];
  for (let i = 1; i < n; i++) {
    const l = res.length;
    res.push(1);
    for (let j = l - i; j < l - 1; j++) {
      res.push(res[j] + res[j + 1]);
    }
    res.push(1);
  }
  return res;
}
