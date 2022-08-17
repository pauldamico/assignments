
function removeZero(str){
str = str.split(".000000000000000000000000000")
let newArray = str[0]
let removeLeadZero = newArray * 1
return removeLeadZero
}

console.log(removeZero("002.14000"))

