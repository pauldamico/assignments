// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1

const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data.results);
    showNames(data.results);
  }
};

function showNames(arr) {
  return arr.map((person) => {
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.textContent = person.name
    p.textContent = person.height
    document.body.appendChild(h1);
    document.body.appendChild(p);
  });
}

// function showData(arr){
//     const h1 = document.createElement('h1')
//     h1.textContent = luke.name
//     document.body.appendChild(h1)
// }
