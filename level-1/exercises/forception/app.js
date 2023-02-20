const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
  const array = []

  for(let i = 0; i < people.length; i++){
    array.push(people[i])
for(let x=0; x< alphabet.length; x++){
  array.push(alphabet[x])
}
  }
return array

}


console.log( forception(people, alphabet))





