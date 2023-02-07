function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = 0;
  let [min, max] = intervals[0];

  for (const interval of intervals) {
    result += max - min;
    min = Math.max(max, interval[0]);
    max = Math.max(max, interval[1]);
  }

  return result + max - min;
}
