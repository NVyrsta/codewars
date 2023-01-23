function lovefunc(flower1, flower2) {
  return (
    [...arguments].some((n) => n % 2 !== 0) &&
    [...arguments].some((n) => n % 2 === 0)
  );
}

// 
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// 
console.log(lovefunc(1, 4));// true
console.log(lovefunc(0, 0));// false
console.log(lovefunc(0, 5));// true