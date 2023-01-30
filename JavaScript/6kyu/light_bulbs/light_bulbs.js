function lightBulbs(lights, n) {
  let res = lights;

  while (n--) {
    res = res.map((l, i) => (res[(i || res.length) - 1] ? 1 - l : l));
  }

  return res;
}
