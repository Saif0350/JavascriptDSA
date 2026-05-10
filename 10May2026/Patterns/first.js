const firstPattern = () => {
  let pattern = ""; // Initialize outside the loop
  for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "\n"; // Add i stars and a newline
  }
  return pattern; // Return the full pattern after the loop
};

console.log(firstPattern());
