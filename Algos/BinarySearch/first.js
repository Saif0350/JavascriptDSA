// 1. Find a number in a sorted array
// Input: arr = [2, 4, 6, 8, 10], target = 8
// Output: 3

// Array must be sorted
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

binarySearch([2, 4, 6, 8, 10], 8); // returns 3 (index)
