function reverseArray(arr) {
  let r = [];
  for (let i = arr.length - 1; i >= 0; i--) r[r.length] = arr[i];
  return r;
}

let arr = [1, 2, 3, 2, 4, 5, 1];

console.log(reverseArray(arr));
