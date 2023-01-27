function number9(n) {
  let res = 0;
  for (let i = 1; i <= n; i *= 10) {
    let curr = Math.floor(n / i);
    res += Math.floor(curr / 10) * i;
    if (curr % 10 === 9) res += (n % i) + 1;
  }
  return res;
}
