function isPangram(string) {
  return [...new Set(string.toLowerCase())]
    .sort()
    .join('')
    .replace(/[.,?! -0123456789]/gi, '').length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));// true
console.log(isPangram('This is not a pangram.'));// false
