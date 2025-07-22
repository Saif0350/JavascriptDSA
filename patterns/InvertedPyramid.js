let n = 5;
function inVertedPyramid2() {
  for (let i = n; i >= 1; i--) {
    let row = "";

    row += " ".repeat(n - i);
    row += "*".repeat(2 * i - 1);
    console.log(row);
  }
}

inVertedPyramid2();
