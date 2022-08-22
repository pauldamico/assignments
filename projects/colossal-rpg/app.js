

debugger
let readlineSync = require("readline-sync");
var colors = require("colors");
console.log("Welcome to The Gauntlet!  Reach 100 yards to escape the forest!");
let playerName = readlineSync.question("Please enter your name: ");
playerName = `${playerName}`.green
let hp = 100;
let invArray = [];
let playerAP = 0
let enemyGenArray = [];
let forward = 0;
let equippedArmor = [];

///enemies                                                     
function Enemy(hp, ap, name) {                                                                               //Enemy constructor
  this.enemyHP = hp;
  this.enemyAP = ap;
  this.enemyName = name;
  this.attackPoints = function randomNumber() {                                                             //handles attack damage from enemys
    return Math.floor(Math.random() * this.enemyAP);
  };
}
const normEnemyNames = [                                                                                     //Norm Enemy Names 
  "Untrained Theif",
  "Small Snake",
  "Scorpian",
  "Fire Ant",
];
const rareEnemyNames = [                                                                                     //rare Enemy Names
  "Trained Theif",
  "Anaconda",
  "Giant Scorpian",
  "Giant Fire Ant",
];
const uniqueEnemyNames = [                                                                                    //unique Enemy Names
  "The Minotaur",
  "The Kraken",
  "Dracula",
  "Frankenstein",
];
const bossNames = ["King Kong", "Godzilla", "T-Rex", "Zeus"];
const normalEnemy = new Enemy(5, 4, "(n)".grey + normEnemyNames[randomNumberGen()]);
const rareEnemy = new Enemy(10, 10, "(r)".yellow + rareEnemyNames[randomNumberGen()]);
const uniqueEnemy = new Enemy(
  15,
  14,
  "(u)".brightBlue + uniqueEnemyNames[randomNumberGen()]
);
const boss = new Enemy(25, 25, "(b)".red + bossNames[randomNumberGen()]);
const enemies = [normalEnemy, rareEnemy, uniqueEnemy, boss];

///Armor
function Armor(ap, armorName) {                                 //armor constructor
  this.armorAP = ap;
  this.name = armorName;
}
const normalArmor = new Armor(5, "Old Worn Light Armor");
const rareArmor = new Armor(10, "Worn Plate Armor");
const uniqueArmor = new Armor(15, "Gold Armor");
const legendaryArmor = new Armor(25, "Armor of Power");
const armorArray = [normalArmor, rareArmor, uniqueArmor, legendaryArmor];
//invArray =[normalArmor]
///console.log(playerAP + invArray[0].armorAP)

function walk() {
  let chanceToWalk = Math.random();
  let userAction = readlineSync.question(
    "(w) move forward 10 yards, (i) check inventory, (p) print stats"
  );
  if (userAction === "w" && chanceToWalk > .33) {
    enemyGenerator();
    console.log(userAction);
  } else if (userAction === "w" && chanceToWalk < .33) {
    forward < 99 ? console.log(`You moved forward ${(forward += 10)} yards`.yellow) 
      : console.log("You Win".rainbow);
  } else if (userAction === "p")
    console.log(
      "Player name:" + playerName.green,
      "HP:" + hp.toString().green,
      invArray.length > 0 ? invArray[0].green :"Items: "+"Inventory is Empty".red
    );
  else if (userAction === "i") {
    for (let x = 0; x < invArray.length; x++) {
      equippedArmor.push(invArray[x]);
      console.log(equippedArmor[x]);
    }

    for (let t = 0; t < equippedArmor.length; t++) {
      console.log(`${t}-- ${equippedArmor[t].name}`);

      let invItem = readlineSync.question(`Type the Item Number to Equip`);

      if (invItem == t) {
        console.log(t);
      }
    }

    // for (let t = 0; t < newArray.length; t++) {
    //   if (inventory === t) {
    //     console.log(newArray[t])
    //     equippedArmor = [];
    //   }

    // if (newArray.length > 0) {
    //   console.log("terstasdfasdfasd")
    //   equippedArmor.push(newArray[inventory]);
    //   playerAP = equippedArmor[0].armorAP + playerAP;
    //   console.log(`${equippedArmor[0].name} has been infused to you`);
    // }
  } //}
}


function gen() {                                                                                 //Generates a random Enemy
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

function enemyGenerator() {                                                                //Pulls the random generated enemy if one doesn't exist or if one has been defeated
   currentHP = hp;
  if (
    typeof currentEnemyHP == "undefined" ||
    currentEnemyHP == enemyGenArray[0].enemyHP
  ) {
    gen();
    console.log(`${enemyGenArray[0].enemyName}`+ ` has appeared!!!`.yellow);
  }

  if (currentEnemyHP > 0) {
    enemyCombat();
  } else if (currentEnemyHP <= 0) {
    console.log(`${enemyGenArray[0].enemyName} has been defeated!`);
    invArray.push(armorArray[randomNumberGen()]);                                                 //Once enemy is defeated a new item gets pushed to the invArray
    console.log(
      `${enemyGenArray[0].enemyName} dropped a`+` ${
        invArray[invArray.length - 1].name
      }`.yellow
    );
    gen();
  }
}



function runAway() {                                                                               //Run Away Function
  let runChance = Math.random();
  if (runChance > 0.5) {
    console.log("Ran Away Successfully!!!");
  } else if (runChance < 0.5) {
    currentHP = hp - enemyGenArray[0].enemyAP;
    hp = currentHP;
    console.log("failed to run away".red);
    currentEnemyHP -= playerAP;
    currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
    currentEnemyHP > 0
      ? (currentHP = hp - enemyGenArray[0].enemyAP)
      : (currentHP = hp);
    hp = currentHP;
    console.log(hp);
    currentHP <= 0 ? (currentHP = 0) : currentHP;
    currentEnemyHP > 0 &&
      console.log(
        `${enemyGenArray[0].enemyName} hits ${playerName} for ${
          enemyGenArray[0].enemyAP
        }. ${playerName} now has ${hp <= 0 ? (hp = 0) : hp} hp left.`
      );
    hp < 0 &&
      console.log(
        `${playerName} has been killed`.bgRed +
          "............Game Over.........".rainbow
      );
    enemyCombat();
  }
}

//////////////////////////////////////
function enemyCombat() {                                                                                    //enemy combat function
  let attackOrRun = readlineSync.question(` (a) to attack, (r) attempt to run`);
  if (attackOrRun === "r") {
    runAway();
  } else if (attackOrRun === "a") {
    playerAP = Math.floor(Math.random() * 11);                                                              //Generates random attack damage for player 
    currentEnemyHP -= playerAP;
    currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
    currentEnemyHP > 0
      ? (currentHP = hp - enemyGenArray[0].enemyAP)
      : (currentHP = hp);
    hp = currentHP;
    console.log(hp);
    currentHP <= 0 ? (currentHP = 0) : currentHP;
    console.log(
      `${playerName} `.green + `hits ${enemyGenArray[0].enemyName} for `+`${playerAP}`.yellow+` it now has `+
      `${currentEnemyHP}`.yellow +` hp left`        
    );
    currentEnemyHP > 0 &&
      console.log(
        `${enemyGenArray[0].enemyName} hits ${playerName} for `+`${enemyGenArray[0].enemyAP}`.red+
        `. ${playerName} now has `+`${hp <= 0 ? (hp = 0) : hp}`.green +` hp left.`
      );
    hp > 0
      ? enemyGenerator()
      : console.log(
          `${playerName} has been killed`.bgRed +
            "............Game Over.........".rainbow
        );
  }
}



while (hp > 0  &&  forward < 99) {
  walk();
  if(forward> 99){console.log("You have escaped.  You Win".rainbow)}
}
