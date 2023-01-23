function wave(str) {
  return str.split('').reduce((acc, letter, ind) => {
    if (letter !== ' ') {
      const word = str.slice(0, ind) + str[ind].toUpperCase() + str.slice(ind + 1);
      acc.push(word);
      return acc;
    }

    return acc;
  }, []);
}
console.log(wave('hello')); // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('Two words'));
