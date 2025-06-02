// How is closure enabling data encapsulation here?

function counterObj() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    },
  };
}

const counter = counterObj();
counter.increment(); // ?
counter.reset(); // ?
console.log(counter.increment()); // ?
