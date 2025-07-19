// 3. Count How Many Times an Element Appears
// ❓ Question:
// Write a function that counts how many times a specific value appears in an array.

function countOccurrences(arr, target) {
  let count = 0;
  for (let item of arr) {
    if (item === target) count++;
  }
  return count;
}

// Test
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
