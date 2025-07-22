// Inverted Triangle

// *****
// ****
// ***
// **
// *

function inverTedTriangle() {
  for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

inverTedTriangle();
