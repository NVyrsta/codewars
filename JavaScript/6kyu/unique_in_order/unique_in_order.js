const uniqueInOrder = function (iterable) {
  return [...iterable].filter((item, ind, arr) => item !== arr[ind - 1]);
}

uniqueInOrder('AAAABBBCCDAABBB'); // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); //         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]); //       == [1,2,3]
