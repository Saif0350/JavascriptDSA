// for loop

// first way
const forLoopSample = () => {
  const elements = [];

  for (let i = 0; i <= 10; i++) {
    elements.push(i);
  }

  return elements;
};

console.log(forLoopSample());

//second way

const forLoopSample2 = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(`Element number is: ${i}`);
  }
};

forLoopSample2();
