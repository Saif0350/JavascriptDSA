let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printSpiralOrder(matrix) {
  let result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  // Loop until the boundaries cross each other
  while (top <= bottom && left <= right) {
    console.log(
      `\nCurrent boundaries: top=${top}, bottom=${bottom}, left=${left}, right=${right}`
    );

    // Traverse from left to right along the top row
    console.log("Traversing top row left to right:");
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
      console.log(`matrix[${top}][${i}] = ${matrix[top][i]}`);
    }
    top++; // move the top boundary down
    console.log(`After traversing top row, new top boundary: ${top}`);

    // Traverse from top to bottom along the right column
    console.log("Traversing right column top to bottom:");
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
      console.log(`matrix[${i}][${right}] = ${matrix[i][right]}`);
    }
    right--; // move the right boundary left
    console.log(`After traversing right column, new right boundary: ${right}`);

    // Traverse from right to left along the bottom row (if there's still a row left)
    if (top <= bottom) {
      console.log("Traversing bottom row right to left:");
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
        console.log(`matrix[${bottom}][${i}] = ${matrix[bottom][i]}`);
      }
      bottom--; // move the bottom boundary up
      console.log(
        `After traversing bottom row, new bottom boundary: ${bottom}`
      );
    }

    // Traverse from bottom to top along the left column (if there's still a column left)
    if (left <= right) {
      console.log("Traversing left column bottom to top:");
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
        console.log(`matrix[${i}][${left}] = ${matrix[i][left]}`);
      }
      left++; // move the left boundary right
      console.log(`After traversing left column, new left boundary: ${left}`);
    }
  }

  console.log("\nFinal spiral order result: ", result);
  return result;
}

printSpiralOrder(matrix);
