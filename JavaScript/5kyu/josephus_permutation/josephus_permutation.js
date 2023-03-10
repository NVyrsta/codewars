function josephus(array, count) {
  const store = [];
  let counter = 0;
  let index = 0;

  while (array.length > 0) {
    index = index % array.length;

    if (++counter === count) {
      store.push(array.splice(index, 1)[0]);
      counter = 0;
      index--;
    }
    index++;
  }

  return store;
}
