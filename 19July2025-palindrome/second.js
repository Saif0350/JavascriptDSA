// ✅ 2. "Eva, can I see bees in a cave?"

const str2 = "Eva, can I see bees in a cave?";
const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPalindrome2 = clean2 === [...clean2].reverse().join("");
console.log(isPalindrome2); // true
