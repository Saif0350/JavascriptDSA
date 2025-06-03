// Question: Write a function to print all elements row by row.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printMatrix(matrix) {
  for (let row of matrix) {
    for (let val of row) {
      console.log(val);
    }
  }
}

console.log(printMatrix(matrix));
