const mainArray = [
  {
    "Kevin Brown": false,
  },
  {
    "Ashley Roger": false,
  },
  {
    "John Doe": false,
  },
  {
    "Alpesh Nakar": false,
  },
  {
    "Daanish Antulay": false,
  },
  {
    "Manoj Sharma": false,
  },
  {
    "Vikas Kumar": true,
  },
  {
    "Kiran Kumar": false,
  },
];

// let saif = mainArray.map((element, index) => {
//   if (Object.values(element)[0] === true) {
//     console.log(Object.keys(element)[0], "true value");
//     return Object.keys(element)[0];
//   }
// });

// const keyatindex = Object.keys(mainArray[2])[0];
// console.log(keyatindex);

// const value = mainArray[2][keyatindex];
// console.log(value);

// console.log(Object.keys(mainArray[2])[0]);

// mainArray.forEach((ele, index) => {
//   const key = Object.keys(ele)[0];
//   // console.log(key);
//   const value = ele[key];
//   if (value === false) {
//     console.log(key);
//   }
// });

// mainArray.forEach((ele, index) => {
//   console.log(ele);
// });

// const a = Object.keys(
//   mainArray.filter((ele, index) => Object.values(ele)[0] === true)[0]
// )[0];

const a = mainArray
  .filter((ele, index) => Object.values(ele)[0] === false)
  .map((ele) => Object.keys(ele)[0])
  .join(", ");
console.log(a);

// console.log(saif);
