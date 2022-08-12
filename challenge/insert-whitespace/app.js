

function insertWhiteSpace(str) {
  let strArray = str.split("");
  let capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let capArray = capString.split("");
  for (let x = 0; x < strArray.length; x++) {
    for (let i = 1; i < capArray.length; i++)
      if (strArray[x] === capArray[i]) {
        strArray[x - 1] += " ";
      }
  }
  return strArray.join("");
}

console.log(insertWhiteSpace("SheWalksToTheBeach"));
