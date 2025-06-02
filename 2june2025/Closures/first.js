// Question: What will this log and why?

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(10)); // ?
