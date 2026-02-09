function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); num++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(48));
