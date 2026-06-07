const button = document.getElementById("btn");
const heading = document.getElementById("heading");
const input = document.getElementById("nameInput");
const box = document.getElementById("box");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const heading2 = document.getElementById("heading2");

// box.addEventListener("mouseover", function () {
//   console.log("Mouse over the box");
// });

button.addEventListener("click", function () {
  heading.innerText = "Saif Alam";
});

input.addEventListener("input", function () {
  console.log(input.value);
});

let count = 0;
increaseBtn.addEventListener("click", function () {
  count++;
  heading2.innerText = count;
  console.log(count);
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    heading2.innerText = count;
    console.log(count);
  }
});

// for keypad if u click any word it will written

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
// });
