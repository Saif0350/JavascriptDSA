const lengthOfLastWord = (str) => {
  str = str.trim();

  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) !== " ") {
      count++;
    } else {
      break;
    }
  }

  return count;
};

const str = "Hey saif hi how are You";
console.log(lengthOfLastWord(str));
