// question find the string and characters

// reverse the array

let arr = [1, 2, "saif", "c", 3, "a", "hello", "b"];

// const answer = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" && arr[i].length === 1) {
//       console.log(arr[i]);
//     }
//   }
// };

const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

// answer(arr);
const reversed = reverseArray(arr);
console.log(reversed);
