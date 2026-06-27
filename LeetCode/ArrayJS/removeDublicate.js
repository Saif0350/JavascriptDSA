const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const arr = [1, 2, 2, 3, 4, 4, 5];

const k = removeDuplicates(arr);

console.log("Number of unique elements:", k);
console.log("Unique elements:", arr.slice(0, k));
console.log("Modified array:", arr);
