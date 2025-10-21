const tableInJs = () => {
  for (let i = 21; i <= 25; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`Inner Loop: ${i} x ${j} = ${i * j}`);
    }
  }
};

tableInJs();
