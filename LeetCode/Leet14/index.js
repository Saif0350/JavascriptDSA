function longestPrefix(str) {
  if (!strs || strs.length === 0) return "";
  str.sort();

  let str1 = str[0];
  let str2 = str[str.length - 1];
  let index = 0;

  while (index < str1.length && index < str2.length) {
    if (str1.charAt(index) === str2.charAt(index)) {
      index++;
    } else {
      break;
    }
  }
  return index === 0 ? "" : str1.substring(0, index);
}

const strs = ["flower", "flow", "flight"];
console.log(longestPrefix(strs));
