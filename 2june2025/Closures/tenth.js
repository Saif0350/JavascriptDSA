// Why does the second call to addOnce return the same value as the first one? How does closure help "remember" that it’s been called?

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const addOnce = once((a, b) => a + b);
console.log(addOnce(2, 3)); // ?
console.log(addOnce(5, 7)); // ?
