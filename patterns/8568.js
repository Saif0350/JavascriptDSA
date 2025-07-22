// 8000
// 500
// 60
// 8

function decompose(num) {
  if (num === 0) return;

  const power = Math.pow(10, Math.floor(Math.log10(num)));

  const part = Math.floor(num / power) * power;
  console.log(part);

  decompose(num % power);
}

decompose(976866);
