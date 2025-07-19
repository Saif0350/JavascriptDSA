// 🪝 4. Recursive setTimeout

function repeatLog() {
  console.log("Ping");
  setTimeout(repeatLog, 1000);
}
repeatLog();
// Output: "Ping" every second
// Explanation: This function logs "Ping" and then sets a timeout to call itself again after 1000 milliseconds (1 second). It creates a recursive loop that continues indefinitely until stopped manually.
