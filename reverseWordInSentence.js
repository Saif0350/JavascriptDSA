// input: Hello saif how are you
// output: you are how saif hello

// const reverseWordInSentence = (sentence) => {
//   const words = sentence.split(" ");
//   return words.reverse().join(" ");
// };

// console.log(reverseWordInSentence("Hello saif how are you"));

const reverseWordInSentence = (sentence) => {
  const words = sentence.split(" ");
  const oneword = words.map((item, index) => {
    return item.split("").reverse().join("");
  });

  return oneword.join(" ");
};

console.log(reverseWordInSentence("Hello saif how are you"));

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
