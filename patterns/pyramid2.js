//  3. Pyramid (Centered Triangle)

//     *
//    ***
//   *****
//  *******
// *********
let n = 5;
function pyramid() {
  for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat(n - i);
    row += "*".repeat(2 * i - 1);
    console.log(row);
  }
}

pyramid();
