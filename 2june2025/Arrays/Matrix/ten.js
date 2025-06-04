// Question: Each row is sorted; write a function to count the total number of zeros in the matrix.

const matrix = [
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
];

function countZeros(matrix) {
  let count = 0;

  for (let row of matrix) {
    for (let val of row) {
      if (val === 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(countZeros(matrix));
