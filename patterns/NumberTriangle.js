function NumberTriangle() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j;
    }

    console.log(row);
  }
}

NumberTriangle();
