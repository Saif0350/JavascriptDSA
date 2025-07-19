// 2. Check if an Element Exists
// ❓ Question:
// Return true if the target exists in the array, otherwise return false.

function elementExists(arr, target) {
  for (let item of arr) {
    if (item === target) return true;
  }
  return false;
}

console.log(elementExists(["apple", "banana", "cherry"], "banana"));
