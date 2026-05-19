function reverseArray(arr) {
  let reversed = [];
  let j = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[j] = arr[i];
    j++;
  }

  return reversed;
}

const findDublicates = () => {
  let dublicates = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      let alreadyAdded = false;

      for (let k = 0; k < dublicates.length; k++) {
        if (dublicates[k] === arr[i]) {
          alreadyAdded = true;
          break;
        }
      }

      if (!alreadyAdded) {
        dublicates[dublicates.length] = arr[i];
      }
    }
  }
  return dublicates;
};

let arr = [1, 2, 3, 2, 4, 5, 1];

console.log(reverseArray(arr));
console.log(findDublicates(arr));
