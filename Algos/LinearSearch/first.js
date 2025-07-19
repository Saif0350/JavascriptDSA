// 1. Find the Index of an Element in an Array
// ❓ Question:
// Write a function that returns the index of a target element in an array using linear search. If not found, return -1.

function linearSeach(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

let Array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(linearSeach(Array, 120));
