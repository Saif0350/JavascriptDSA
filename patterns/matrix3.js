let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[1][2]);

// diagonal
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}

// reverse diagonal
// for (let i = 0; i < matrix.length; i++) {
//   console.log(matrix[i][matrix.length - 1 - i]);
// }
