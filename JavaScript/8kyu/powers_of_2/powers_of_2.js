function powersOfTwo(n, arr = []) {
  while (n >= 0) {
    arr.push(2 ** n);
    n--;
  }

  return arr.reverse();
}
