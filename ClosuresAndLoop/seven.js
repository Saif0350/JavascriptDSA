// 👻 7. Canceling setTimeout

let timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 1000);

clearTimeout(timeoutId);
console.log("Timeout cleared, nothing will be logged after 1 second.");
// Output: "Timeout cleared, nothing will be logged after 1 second."
// Explanation: This code sets a timeout to log a message after 1 second, but immediately clears it using `clearTimeout`, preventing the message from being logged. This demonstrates how to cancel a scheduled timeout.
