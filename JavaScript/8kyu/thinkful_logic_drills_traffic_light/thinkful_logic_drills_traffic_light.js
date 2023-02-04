function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const ind = lights.indexOf(current);

  return lights[ind + 1] || lights[0];
}

// const updateLight = (current) =>
//   ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green'
//   }[current]);