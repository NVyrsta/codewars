'use strict';

const detectCapital = function (w) {
  const word = w.trim();
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (word.toUpperCase() === w.trim()) {
    console.log('true #1');
    return true;
  }

  if (word.toLowerCase() === w.trim()) {
    console.log('true #2');
    return true;
  }

  if (word[0].toUpperCase() + word.slice(1).toLowerCase() === word) {
    console.log('true #3');
    return true;
  }

  if (word === 0) {
    return 'Enter a word here';
  }

  if (word.indexOf(' ') !== -1) {
    return 'Enter one word at a time';
  }

  return false;
};

console.log(('  '.trim()).length);
