// Question: Return the absolute difference between the sums of the diagonals.

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
// Output: |11 + 5 + (-12) - (4 + 5 + 10)| = 15

function diagonalDifference(matrix) {
  let primary = 0,
    secondary = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    primary += matrix[i][i];
    secondary += matrix[i][n - i - 1];
  }

  return Math.abs(primary - secondary);
}
console.log(diagonalDifference(matrix)); // Output: 15
