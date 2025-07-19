// 4. Return All Indices of a Target Element
// ❓ Question:
// Find and return all the indices where the target element appears.

function findAllIndices(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

// Test
console.log(findAllIndices([7, 8, 7, 9, 7], 7)); // Output: [0, 2, 4]
