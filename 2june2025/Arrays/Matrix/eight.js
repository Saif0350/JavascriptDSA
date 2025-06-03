// Question: Find the sum of the two diagonals (handle overlaps only once).

const matrix = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
// Output: 5 (diagonals: 1+1+1+1+1)

function diagonalSum(matrix) {
  let sum = 0;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    sum += matrix[i][i];
    if (i !== n - i - 1) sum += matrix[i][n - i - 1];
  }

  return sum;
}

console.log(diagonalSum(matrix)); // Output: 5 (diagonals: 1+1+1+1+1)
