function number(array) {
  return array.reduce((acc, item, ind) => {
    acc.push(`${ind + 1}: ${item}`);
    return acc;
  }, []);
}

console.log(number(["a", "b", "c"]));// ["1: a", "2: b", "3: c"]
