// Why do these calls return the correct values (0, 1, 2)? What role does the IIFE (Immediately Invoked Function Expression) play?

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (index) {
    return function () {
      return index;
    };
  })(i);
}

console.log(funcs[0]()); // ?
console.log(funcs[1]()); // ?
console.log(funcs[2]()); // ?
