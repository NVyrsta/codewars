function solution(str) {
  return [...str]
    .reduce((acc, item, ind, arr) => {
      if (ind % 2 == 0) {
        acc.push(item.concat(arr[ind + 1] || '_'));
      }

      return acc;
    }, []);
}

console.log(solution('abc'));// ['ab', 'c_']
console.log(solution('abcdef'));// ['ab', 'cd', 'ef']
