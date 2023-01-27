function intersect(arr = [], ...args) {
  return [
    ...new Set(arr.filter((item) => args.every((arg) => arg.includes(item))))
  ];
}
