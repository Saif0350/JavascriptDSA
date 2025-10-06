// function reverseWordInAString(str) {
//   return str.split(" ").reverse("").join(" ");
// }

// using loop
// function reverseWordInAString(str) {
//   const words = str.split(" ");

//   let reversed = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversed += words[i];
//     if (i !== 0) {
//       reversed += " ";
//     }
//   }

//   return reversed;
// }

// console.log(reverseWordInAString("Mamu Kaise Ho"));

//  now hard challenge
// Input:  "Mamu Kaise Ho"
// Output: "Kaise Mamu Ho"

function reverseWordInAString(str) {
  const words = str.split(" ");

  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[1] + " ";
    } else if (i === 1) {
      result += words[0] + " ";
    } else {
      result += words[i] + " ";
    }
  }

  return result.trim();
}

console.log(reverseWordInAString("Mamu Kaise Ho"));
