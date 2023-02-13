function constructRectangle(area) {
  let start = area;
  let res;

  while (start >= area / start) {
    if (start * (area / start) === area && (area / start) % 1 === 0) {
      console.log(start, (area / start));
      res = [start, area / start];

    }
    start--;
  }
  console.log(res);
}

//constructRectangle(4);// === [2, 2]
constructRectangle(225);// === [19, 1]
//constructRectangle(32);// === [8, 4]
