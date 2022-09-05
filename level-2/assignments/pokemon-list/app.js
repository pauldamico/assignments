const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState===4){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon)
        displayPokemon(data.objects[0].pokemon)
    }
}


function displayPokemon (arr){
    
    for(let x=0; x<arr.length;x++){
       let h1 = document.createElement("h1")     
       h1.textContent=arr[x].name    
       document.body.appendChild(h1)
      
    }

}
