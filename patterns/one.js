const arr = [1, 4, 8];

function naif() {
  for (let i = 0; i < arr.length; i++) {
    let star = "";
    for (let j = 0; j < arr[i]; j++) {
      star += "*";
    }
    console.log(star);
  }
}

naif();
