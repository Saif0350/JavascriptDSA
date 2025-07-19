// 🧠 3. setTimeout with 0ms

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Inside setTimeout
// Explanation: The `setTimeout` with 0ms is placed in the event queue and will execute after the current call stack is cleared, which is why "Inside setTimeout" appears after "End".
