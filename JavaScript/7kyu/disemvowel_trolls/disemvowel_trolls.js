function disemvowel(str) {
  return str.replace(/[aoiue]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"));
