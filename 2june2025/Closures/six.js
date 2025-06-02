function createBigObject() {
  const largeData = new Array(1000000).fill("data");

  return function () {
    console.log("Using some of the data:", largeData[0]);
  };
}

const useData = createBigObject();

// Does the largeData array stay in memory even if createBigObject() is done executing? Why?
