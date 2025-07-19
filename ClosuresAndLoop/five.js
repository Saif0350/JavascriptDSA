// 🧪 5. Delay Accuracy with setInterval vs setTimeout

let start = Date.now();
let count = 0;

let interval = setInterval(() => {
  console.log(`Elapsed: ${Date.now() - start}ms`);
  count++;
  if (count === 5) clearInterval(interval);
}, 1000);

// Output: "Elapsed: Xms" every second for 5 seconds
// Explanation: This code uses `setInterval` to log the elapsed time every second. The interval is cleared after 5 iterations, demonstrating how `setInterval` can be used for repeated actions with a delay.
// Note: The actual elapsed time may vary slightly due to the execution time of the callback and other factors in the JavaScript event loop.
