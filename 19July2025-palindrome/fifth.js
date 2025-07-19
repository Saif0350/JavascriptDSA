//  5. "A man, a plan, a canal: Panama"

const str5 = "A man, a plan, a canal: Panama";
const clean5 = str5.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPalindrome5 = clean5 === [...clean5].reverse().join("");
console.log(isPalindrome5); // true
