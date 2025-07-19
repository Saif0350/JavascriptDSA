// 4. "Mr. Owl ate my metal worm"

const str4 = "Mr. Owl ate my metal worm";
const clean4 = str4.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPalindrome4 = clean4 === [...clean4].reverse().join("");
console.log(isPalindrome4); // true
