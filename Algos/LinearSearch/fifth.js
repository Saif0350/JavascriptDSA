// 5. Case-Insensitive Search in a String Array
// ❓ Question:
// Search for a string in an array regardless of the case.

function caseInsensitiveSearch(arr, target) {
  target = target.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === target) return i;
  }
  return -1;
}

console.log(caseInsensitiveSearch(["Red", "Green", "Blue"], "green")); // Output: 1
