const matrix = [
  [1, 9, 5],
  [0, 2, 3],
  [6, 4, 8],
];

let diagonal = [];

for (let i = 0; i < matrix.length; i++) {
  diagonal.push(matrix[i][matrix[0].length - i - 1]);
}

console.log(diagonal, "ReverseDiagonalmatrix");
