
document.passengerinfo.addEventListener("submit", (e)=>{
    e.preventDefault()
   const firstName = document.passengerinfo.firstname.value
   const lastName = document.passengerinfo.lastname.value
   const age = document.passengerinfo.age.value
   const gender = document.passengerinfo.gender.value
   const location = document.passengerinfo.location.value
   const diet = document.passengerinfo.diet
   let dietArray = []
   for(let x =0; x<document.passengerinfo.diet.length; x++){
    if(document.passengerinfo.diet[x].checked){
        dietArray.push(document.passengerinfo.diet[x].value)
    }
   }
    alert(
    "First name: " + firstName +"\n" +
    "Last name: " + lastName +"\n" +
    "Age: " + age +"\n" +
    "Gender: " + gender +"\n" +
    "Location: " + location +"\n" +
    "Dietary restrictions: " + dietArray.join(", "))
})

