// Why does modifying arr2 also affect arr1? How could you fix it?

const arr1 = [{ id: 1 }, { id: 2 }];
const arr2 = [...arr1];

arr2[0].id = 99;
console.log(arr1[0].id);
