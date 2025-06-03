const original = [1, 2, 3];
const copy = original;
copy.push();
console.log(original); // ?

// Why did the original array change too?
