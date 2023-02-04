function queueTime(customers, n) {
  return Math.max(
    ...customers.reduce((acc, c) => {
      const minTime = acc.indexOf(Math.min(...acc));
      acc[minTime] += c;
      return acc;
    }, new Array(n).fill(0))
  );
}
