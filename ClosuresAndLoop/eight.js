function runLater(fn, delay) {
  let timer = setTimeout(fn, delay);
  return () => clearTimeout(timer);
}

const cancelFn = runLater(() => {
  console.log("Should this run?");
}, 2000);

setTimeout(cancelFn, 1000);
// Output: "Should this run?" will not be logged because the cancel function is called before the original function executes.
// Explanation: The `runLater` function sets a timeout to execute the provided function after a specified delay. It returns a cancel function that can be called to clear the timeout before it executes. In this case, the cancel function is called after 1 second, preventing the original function from running after 2 seconds.
