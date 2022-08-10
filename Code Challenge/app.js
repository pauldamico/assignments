//Challenge 1
var answer1 = document.getElementById("answer-1");

secondLargeArray = [10, 40, 30, 5, 100];

function secondLargest(secondLargeArray) {
  const sortedArray = secondLargeArray.sort(function (a, b) {
    return a - b;
  });
  const x = sortedArray.length - 2;
  return sortedArray[x];
}
answer1.textContent = `Challenge Answer 1: " ${secondLargest(
  secondLargeArray
)} " `;
