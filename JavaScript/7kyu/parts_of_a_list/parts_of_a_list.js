function divideList(list) {
  return list.reduce((acc, _, i) => {
    const copy = [...list];
    const first = copy.splice(0, i + 1).join(' ');
    const second = copy.join(' ');

    if (second !== '') {
      acc.push([first, second]);
    }

    return acc;
  }, []);
}
