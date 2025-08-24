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
