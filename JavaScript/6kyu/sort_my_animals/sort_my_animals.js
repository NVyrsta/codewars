function sortAnimal(animals) {
  if (!animals) {
    return null;
  }

  const copyAnimals = [...animals].sort(
    (a, b) => a.numberOfLegs - b.numberOfLegs
  );

  const legs = [...new Set(copyAnimals.map((animal) => animal.numberOfLegs))];
  const res = [];

  for (const leg of legs) {
    const arr = copyAnimals
      .filter((an) => an.numberOfLegs === leg)
      .sort((a, b) => a.name.localeCompare(b.name));

    res.push(...arr);
  }

  return res;
}
