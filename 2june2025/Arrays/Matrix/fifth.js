// Question: Write a function to check if a number (e.g., 5) exists.

// Matrix is sorted row-wise and column-wise
const matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function searchMatrix(matrix, target) {
  let i = 0,
    j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] > target) j--;
    else i++;
  }

  return false;
}

console.log(searchMatrix(matrix, 5));
