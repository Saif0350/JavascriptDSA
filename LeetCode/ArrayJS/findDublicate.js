const findDuplicate = (nums) => {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
};

const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(findDuplicate(arr));
