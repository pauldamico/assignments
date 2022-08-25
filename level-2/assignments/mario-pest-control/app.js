marioForm =document["mario-form"]
const goombaPrice = document.getElementById("goomba-price")
const bombombPrice = document.getElementById("bob-omb-price")
const cheepCheepPrice = document.getElementById("cheep-cheep-price")
const goombaTotal = document.getElementById("goomba-total-cost")
const bombombTotal = document.getElementById("bob-omb-total-cost")
const cheepCheepTotal = document.getElementById("cheep-cheep-total-cost")
const allTotal = document.getElementById("all-total")
goombaPrice.value = 5
bombombPrice.value = 7
cheepCheepPrice.value = 11
goombaPrice.textContent = `${5} Coins`
bombombPrice.textContent = `${7} Coins`
cheepCheepPrice.textContent = `${11} Coins`

marioForm.addEventListener("submit", (e)=>{
e.preventDefault()
const goombaTotalInput = marioForm["goomba-caught"].value
const bobombTotalInput = marioForm["bob-omb-caught"].value
const cheepCheepTotalInput = marioForm["cheep-cheep-caught"].value
const goombaCoinWorth = 5 * goombaTotalInput
const bobombCoinWorth = 7 * bobombTotalInput
const cheeCheepCoinWorth = 11 * cheepCheepTotalInput
const totalCoinValue = goombaCoinWorth + bobombCoinWorth + cheeCheepCoinWorth
goombaTotal.textContent = 5 * goombaTotalInput + " Coins"
bombombTotal.textContent = 7 * bobombTotalInput + " Coins"
cheepCheepTotal.textContent = 11 * cheepCheepTotalInput + " Coins"
allTotal.textContent=totalCoinValue + " Coins"

})