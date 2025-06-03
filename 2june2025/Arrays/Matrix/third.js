// 🔁 3. Rotate Matrix 90 Degrees Clockwise

// Input:
const matrix = [
  [1, 2],
  [3, 4],
];

// [
//   // Output:
//   ([3, 1], [4, 2])
// ];

function rotate90(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
  return matrix;
}

console.log(rotate90(matrix));
