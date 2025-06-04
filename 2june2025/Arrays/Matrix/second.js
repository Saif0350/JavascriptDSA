// Question: Write a function to transpose the matrix.

// Input:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
// Output:
[
  [1, 4],
  [2, 5],
  [3, 6],
];

// solution1
// function transpose(matrix) {
//   let rows = matrix.length,
//     cols = matrix[0].length;
//   let result = Array.from({ length: cols }, () => []);

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       result[j][i] = matrix[i][j];
//     }
//   }
//   return result;
// }

// solution2
function transpose(matrix) {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }

  return result;
}

console.log(transpose(matrix));
