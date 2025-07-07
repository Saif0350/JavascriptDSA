// 🔁 2. Fixing the Above with let

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// // ans : 0, 1, 2
// // explanation: Using `let` creates a new scope for each iteration of the loop, so each `setTimeout` callback captures the current value of `i`. The first callback logs 0, the second logs 1, and the third logs 2.
