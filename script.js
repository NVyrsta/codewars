function switchLights(lights, k) {
  const total = [lights];
  const lastEl = lights.length - 1;
  
  for (let j = 1; j <= k; j++) {
    const prev = [...total[total.length - 1]];
    const row = [];
    
    for (let i = 0; i < lights.length; i++) {
      const prevEl = i === 0 ? prev[lastEl] : prev[i - 1];
      if (prevEl) {
        row.push(Number(!prev[i]));
      } else {
        row.push(prev[i]);
      }

    }
    
    total.push(row);


  }
  const res = [...total[total.length - 1]];
  console.log(res);
  
  return res;
}


lights = [0, 1, 1, 0, 1, 1];
n = 2;


switchLights(lights, n);
// 0. [0, 1, 1, 0, 1, 1] - початковий стан
// 1. [1, 1, 0, 1, 1, 0]- 1 хід // lights[2], lights[3], lights[5] і lights[0] змінили свої стани
// 2. [1, 0, 1, 1, 0, 1] - 2 хід // lights[1], lights[2], lights[4] і lights[5] змінили свої стани

// lights = [0, 0, 1, 0];
// n = 1;
// switchLights(lights, n) === [0, 0, 1, 1];
// 0. [0, 0, 1, 0] - початковий стан
// 1. [0, 0, 1, 1]- 1 хід // lights[3] змінила свій стан
