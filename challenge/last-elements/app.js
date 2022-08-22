
function last (arr, num){
let lastArray = []
if (num > arr.length){return "invalid"}
else{
for(let x = arr.length - num; x < arr.length; x++){
lastArray.push(arr[x])}
return lastArray}
}
console.log(last([1, 2, 3, 4, 5], 0)) 

