const lightBill = (units) => {
  if (units <= 0) return 0;

  if (units <= 100) {
    return units * 4.2;
  } else if (units <= 200) {
    return 100 * 4.2 + (units - 100) * 6;
  } else if (units <= 400) {
    return 100 * 4.2 + 100 * 6 + (units - 200) * 8;
  } else {
    return 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;
  }
};

console.log("Total Bill: " + lightBill(600));
lightBill();
