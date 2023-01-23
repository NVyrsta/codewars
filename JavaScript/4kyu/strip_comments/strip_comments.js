function solution(str, mark) {
  return str
    .split('\n')
    .map(line => mark.reduce((acc, separator) => acc.split(separator)[0], line))
    .join('\n');
}

console.log(
  solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
);// == "apples, pears\ngrapes\nbananas"
