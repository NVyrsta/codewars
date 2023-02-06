function ownedCatAndDog(cat, dog) {
  let catAge = cat - 15;
  let dogAge = dog - 15;
  let humanCatAge = 0;
  let humanDogAge = 0;

  if (catAge >= 0) {
    humanCatAge += 1;
    catAge -= 9;

    if (catAge >= 0) {
      humanCatAge += 1;
      catAge -= 4;

      while (catAge >= 0) {
        humanCatAge += 1;
        catAge -= 4;
      }
    }
  }

  if (dogAge >= 0) {
    humanDogAge += 1;
    dogAge -= 9;

    if (dogAge >= 0) {
      humanDogAge += 1;
      dogAge -= 5;

      while (dogAge >= 0) {
        humanDogAge += 1;
        dogAge -= 5;
      }
    }
  }

  return [humanCatAge, humanDogAge];
}
