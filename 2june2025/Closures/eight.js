function Person(name) {
  this.name = name;

  this.sayLater = function () {
    setTimeout(function () {
      console.log("Hello, I am " + this.name);
    }, 1000);
  };
}

const p = new Person("Alice");
p.sayLater();

// Why does this log undefined instead of "Alice"?
// Follow-up: How can you fix it using closures?
