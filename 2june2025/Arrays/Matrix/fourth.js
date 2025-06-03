// Question: If any cell is 0, set the entire row and column to 0 (do it with O(1) space if possible).

// Input:
const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

// [
//   // Output:
//   ([1, 0, 3], [0, 0, 0], [7, 0, 9])
// ];

function setZeroes(matrix) {
  let rows = new Set(),
    cols = new Set();

  matrix.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 0) {
        rows.add(i);
        cols.add(j);
      }
    });
  });

  matrix.forEach((row, i) => {
    row.forEach((_, j) => {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    });
  });

  return matrix;
}
console.log(setZeroes(matrix));
