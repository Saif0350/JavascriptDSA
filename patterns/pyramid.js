let nums = 5;

for (let i = 1; i <= nums; i++) {
  let row = "";

  // Add spaces to the left for centering
  for (let j = 1; j <= nums - i; j++) {
    row += " ";
  }

  // Add stars for the pyramid
  for (let k = 0; k < 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}
