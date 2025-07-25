// function NumberTriangle() {
//   for (let i = 1; i <= 5; i++) {
//     let star = " ";
//     for (let j = 0; j < i; j++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }

// sample 2:
// const NumberTriangle = () => {
//   for (let i = 1; i <= 5; i++) console.log("*".repeat(i));
// };

// NumberTriangle();

// sample 3:
// using Recursion
// const printStars = (row, max) => {
//   if (row > max) return;

//   console.log("*".repeat(row));
//   printStars(row + 1, max);
// };

// printStars(1, 6);

// sample 4:
// for (let i = 1; i <= 5; i++) {
//   console.log(Array(i).fill("*").join(""));
// }

// sample 5:
// [1, 2, 3, 4, 5].map((i) => console.log("*".repeat(i)));

//sample 6: while loop

// let i = 1;
// while (i <= 5) {
//   console.log("*".repeat(i));
//   i++;
// }

//sample 7: using do while

// let i = 1;
// do {
//   console.log("*".repeat(i));
//   i++;
// } while (i <= 5);

//sample 8: using recursion one function only
const triangle = (n) => {
  if (n === 0) return;
  triangle(n - 1);
  console.log("*".repeat(n));
};

triangle(5);
