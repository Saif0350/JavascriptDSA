// ✅ 3. "Do geese see God?"

const str3 = "Do geese see God?";
const clean3 = str3.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPalindrome3 = clean3 === [...clean3].reverse().join("");
console.log(isPalindrome3); // true
