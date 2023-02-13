function topThreeWords(text) {
  const str = text.replace(/([\n,#()$./"!&?;:])/g, '').toLowerCase();
  const obj = str
    .split(' ')
    .filter((w) => w !== '')
    .filter((i) => i !== "'")
    .reduce(
      (acc, item) => ({
        ...acc,
        [item]: (acc[item] || 0) + 1
      }),
      {}
    );

  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((n) => n[0]);
}
