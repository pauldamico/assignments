let readlineSync = require("readline-sync");
var colors = require("colors");
let hp = 100;
let armorHealth = 0;
let maxHP = armorHealth + hp;
let invArray = [];
let playerAP = 10;
let enemyGenArray = [];
let forward = 0;
let equippedArmor = []

///enemies
function Enemy(hp, ap, name) {
  this.enemyHP = hp;
  this.enemyAP = ap;
  this.enemyName = name;
  this.attackPoints = function randomNumber() {
    return Math.floor(Math.random() * this.enemyAP);
  };
}
const normEnemyNames = [
  "A Untrained Theif",
  "A Small Snake",
  "A Scorpian",
  "A Fire Ant",
];
const rareEnemyNames = [
  "A Trained Theif",
  "A Anaconda",
  "A Giant Scorpian",
  "A Giant Fire Ant",
];
const uniqueEnemyNames = [
  "The Minotaur",
  "The Kraken",
  "Dracula",
  "Frankenstein",
];
const bossNames = ["King Kong", "Godzilla", "T-Rex", "Zeus"];
const normalEnemy = new Enemy(5, 4, "(n)" + normEnemyNames[randomNumberGen()]);
const rareEnemy = new Enemy(10, 10, "(r)" + rareEnemyNames[randomNumberGen()]);
const uniqueEnemy = new Enemy(15,14, "(u)" + uniqueEnemyNames[randomNumberGen()]);
const boss = new Enemy(25, 25, "(b)" + bossNames[randomNumberGen()]);
const enemies = [normalEnemy, rareEnemy, uniqueEnemy, boss];

///Armor
function Armor(ap, armorName) {
  this.armorAP = ap;
  this.name = armorName
}
const normalArmor = new Armor(5, "Old Worn Light Armor");
const rareArmor = new Armor(10, "Worn Plate Armor"); 
const uniqueArmor = new Armor(15, "Gold Armor"); 
const legendaryArmor = new Armor(25, "Armor of Power") ;
const armorArray = [normalArmor, rareArmor, uniqueArmor, legendaryArmor];
//invArray =[normalArmor]
///console.log(playerAP + invArray[0].armorAP)

function walk() {
  console.log("back to walk".green);
  let chanceToWalk = Math.random();
  let userAction = readlineSync.question(
    "(w) move forward, (i) check inventory"
  );
  if (userAction === "w" && chanceToWalk > 0.3) {
    enemyGenerator();
    console.log(userAction);
  } 
  else if (userAction === "w" && chanceToWalk < 0.3) {
    forward < 99
      ? console.log("You moved forward") +
        `${(forward += 10)} ` +
        "yards" +
        console.log(forward)
      : console.log("You Win".rainbow);
  }
  else if (userAction === "i"){
   newArray = []
    for(let x=0; x < invArray.length; x++){
        
  newArray.push(invArray[x])
   console.log(`${x}: ${newArray[x].name}`)
  }
  invArray = []
    let inventory = readlineSync.question("Choose a item that will infuse with you for 3 rounds")
   for(let t =0;t<newArray.length; t++)
   {
if(inventory === t){
   equippedArmor = []
}
   }
   if(newArray.length>0){
   
equippedArmor.push(newArray[inventory])
playerAP = equippedArmor[0].armorAP + playerAP
console.log(`${equippedArmor[0].name} has been infused to you`)}

}

}

function gen() {
  enemyGenArray = [];
  let i = Math.floor(Math.random() * 4);
  enemyGenArray.push(enemies[i]);
  let currentEnemyHealth = enemyGenArray[0].enemyHP;
  currentEnemyHP = currentEnemyHealth;
}
function randomNumberGen() {
  let x = Math.floor(Math.random() * 4);
  return x;
}
/////////////////////////////////////////////////////Enemy Combat/////////////////////////////////////////////
function enemyGenerator() {
  console.log("enemyGenerator".green);
  currentHP = hp;
  if (
    typeof currentEnemyHP == "undefined" ||
    currentEnemyHP == enemyGenArray[0].enemyHP
  ) {
    gen();
    console.log(`${enemyGenArray[0].enemyName} has appeared!!!`.red);
  }

  if (currentEnemyHP > 0) {
    let attackOrRun = readlineSync.question(
      ` (a) to attack, (r) attempt to run`
    );
    if (attackOrRun === "a") {
      currentEnemyHP -= playerAP;
      currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
      currentEnemyHP > 0
        ? (currentHP = hp - enemyGenArray[0].enemyAP)
        : (currentHP = hp);
      hp = currentHP;
      console.log(hp);
      currentHP <= 0 ? (currentHP = 0) : currentHP;
      console.log(
        `${playerName} hits ${enemyGenArray[0].enemyName} for ${playerAP} it now has ${currentEnemyHP} hp left`
          .green
      );
      currentEnemyHP > 0 &&
        console.log(
          `${enemyGenArray[0].enemyName} hits ${playerName} for ${
            enemyGenArray[0].enemyAP
          }. ${playerName} now has ${hp <= 0 ? (hp = 0) : hp} hp left.`
        );
      hp > 0
        ? enemyGenerator()
        : console.log(
            `${playerName} has been killed`.bgRed +
              "............Game Over.........".rainbow
          );
    }
  } else if (currentEnemyHP <= 0) {
    console.log(`${enemyGenArray[0].enemyName} has been defeated!`)
    invArray.push(armorArray[1])    
    console.log(`${enemyGenArray[0].enemyName} dropped a ${invArray[invArray.length - 1].name}`)
    gen();
  } 
}

function runAway() {
  let runChance = Math.floor(Math.random() * 11);
  runChance > 5
    ? console.log("Ran Away Successfully!!!")
    : console.log("Failed to run away");
  console.log(runChance);
}

function run() {
  let attackOrRun = readlineSync.question(` (a) to attack, (r) attempt to run`);

  if (attackOrRun == "a") {
    enemyGenerator();
  } else if (attackOrRun == "r") {
    runAway();
  }
}


console.log("Welcome to The Gauntlet!  Reach 100 yards to escape the forest!");
let playerName = readlineSync.question("Please enter your name: ");

while (hp > 0) {
  walk();
}
