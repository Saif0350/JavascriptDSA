// 🔹 1. Reverse a String

// const reverse = (str) => {
//   return console.log(str.split("").reverse().join(""));
// };

// reverse("Hellosaif");

// using recursion

const reverse = (str) => {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse("saifalamasnasu"));
