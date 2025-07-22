// Create a right-angle triangle of stars, height 5
// Output:
// *
// **
// ***
// ****
// *****

function rightAngleTriangle() {
  for (let i = 0; i <= 5; i++) {
    star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

rightAngleTriangle();
