var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];


function sortedOfAge(arr) {
  const newArray = arr.reduce((final, user) => {
    user.age > 18 && final.push(user);
    return final;
  }, []);
  const sortedArray = newArray.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    else {
      return 0;
    }
  });
  const mappedArray = sortedArray.map(
    (person) =>
      person.age >= 18 &&
      `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
  );

  return mappedArray;
}

console.log(sortedOfAge(peopleArray));

/*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
