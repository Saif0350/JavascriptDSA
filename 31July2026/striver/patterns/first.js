const firstPattern = (n) => {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      result += "* ";
    }
    result += "\n";
  }

  console.log(result);
};

firstPattern(3);
