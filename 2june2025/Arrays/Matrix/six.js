// Question: Return an array of the maximum value from each row.

const matrix = [
  [1, 5, 3],
  [7, 2, 8],
  [4, 9, 6],
];

function rowMaxes(matrix) {
  return matrix.map((row) => Math.max(...row));
}

console.log(rowMaxes(matrix)); // Output: [5, 8, 9]
