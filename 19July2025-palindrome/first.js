// 1. "Was it a rat I saw?"

const str1 = "Was it a rat i saw?";
const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPalindrome1 = clean1 === [...clean1].reverse().join("");
console.log(isPalindrome1); // true
