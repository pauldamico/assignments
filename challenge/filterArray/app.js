function filterArray(arr) {
  newArray = [];
  for (let x = 0; x < arr.length; x++) {
    if (typeof arr[x] !== "string") {
      newArray.push(arr[x]);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
