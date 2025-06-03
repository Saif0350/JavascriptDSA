// What will flat contain? How does the spread operator work in this case?

const arr = [1, [2, 3], 4];
const flat = [].concat(...arr);
console.log(flat); // ?
// The spread operator takes each element of the array and spreads it out into a new array.
// In this case, it flattens the nested array [2, 3] into the new array, resulting in [1, 2, 3, 4].
