function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false;

  return (
    a
      .map((x) => x * x)
      .sort()
      .toString() === b.sort().toString()
  );
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
comp(a,b);