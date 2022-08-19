function largest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
console.log(largest([22, 5, 222, 12, 92, 173]));

function lettersWithStrings(arr, str) {
  let hasString = [];
  for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < arr[x].length; i++) {
      if (arr[x].split("")[i] == str) {
        hasString.push(arr[x]);
      }
    }
  }
  return hasString;
}
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"));
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")
);

function isDivisible(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}
console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false
