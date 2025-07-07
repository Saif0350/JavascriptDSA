// 🔄 6. setTimeout Inside Promise

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");
// Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout
