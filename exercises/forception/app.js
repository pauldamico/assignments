var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
alphabet = alphabet.split("").join('",')

   let newArray = []
  for (let x = 0; x <people .length; x++) {
   
   people[x] = `"${people[x]}:" `
  
    for (let i = 0; i < alphabet.length; i++) {
        newArray[x] = people[x].concat(alphabet)
            
    }
  
  }
 // console.log(alphabet.split("").concat(people))
  //newArray = newArray.join("").split()
  
  return newArray.join().split(" ")
}



console.log(forception(people, alphabet))


