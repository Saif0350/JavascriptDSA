// 🔁 1. Output Prediction (Closures + Loops)
// ❓ What will this log and why?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// ans : 3
// explanation: The loop runs three times, but by the time the `setTimeout` callbacks execute, the loop has completed and `i` is 3. All three callbacks will log the final value of `i`, which is 3.
