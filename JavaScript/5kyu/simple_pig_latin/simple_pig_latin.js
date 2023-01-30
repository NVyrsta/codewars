function pigIt(str) {
  const chars = ',./?!:;';

  return str
    .split(' ')
    .map((word) =>
      chars.includes(word)
        ? word
        : word.slice(1) + word[0] + 'ay'
    )
    .join(' ');
}

pigIt('code') === 'odecay';
pigIt('Javascript is fun') === 'avascriptJay siay unfay';
pigIt('Thank you !') === 'hankTay ouyay !';
