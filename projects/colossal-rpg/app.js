debugger;
let readlineSync = require("readline-sync");
var colors = require("colors");
console.log("Welcome to The Gauntlet!  Reach 100 yards to escape the forest!");
let playerName = readlineSync.question("Please enter your name: ");
playerName = `${playerName}`.green;
let hp = 100;
let invArray = [];
let playerAP = 0;
let enemyGenArray = [];
let forward = 0;
let equippedArmor = [];

///enemies
function Enemy(hp, ap, name) {
  //Enemy constructor
  this.enemyHP = hp;
  this.enemyAP = ap;
  this.enemyName = name;
  // this.attackPoints = function () {                                              //could not get this constructor function to work correctly  NOT IN USE
  //    Math.floor(Math.random() * this.enemyAP);
  // };
}
const normEnemyNames = [
  //Norm Enemy Names
  "Untrained Theif",
  "Small Snake",
  "Scorpian",
  "Fire Ant",
];
const rareEnemyNames = [
  //rare Enemy Names
  "Trained Theif",
  "Anaconda",
  "Giant Scorpian",
  "Giant Fire Ant",
];
const uniqueEnemyNames = [
  //unique Enemy Names
  "The Minotaur",
  "The Kraken",
  "Dracula",
  "Frankenstein",
];
const bossNames = ["King Kong", "Godzilla", "T-Rex", "Zeus"];
const normalEnemy = new Enemy(
  5,
  4,
  "(n)".grey + normEnemyNames[randomNumberGen()]
);
const rareEnemy = new Enemy(
  10,
  10,
  "(r)".yellow + rareEnemyNames[randomNumberGen()]
);
const uniqueEnemy = new Enemy(
  15,
  14,
  "(u)".brightBlue + uniqueEnemyNames[randomNumberGen()]
);
const boss = new Enemy(25, 25, "(b)".red + bossNames[randomNumberGen()]);
const enemies = [normalEnemy, rareEnemy, uniqueEnemy, boss];

///Armor
function Armor(ap, armorName) {
  //armor constructor
  this.armorAP = ap;
  this.name = armorName;
}
const normalArmor = new Armor(5, "(n)".grey + "Old Worn Light Armor".yellow);
const rareArmor = new Armor(10, "(r)".yellow + "Worn Plate Armor".yellow);
const uniqueArmor = new Armor(15, "(u)".brightBlue + "Gold Armor".yellow);
const legendaryArmor = new Armor(25, "(l)".red + "Armor of Power".yellow);
const armorArray = [normalArmor, rareArmor, uniqueArmor, legendaryArmor];

function walk() {
  //the main function when not fighting a enemy  Walk
  let chanceToWalk = Math.random();
  let userAction = readlineSync.question(
    "(w) move forward 10 yards, (i) check inventory, (p) print stats: "
  );
  if (userAction === "w" && chanceToWalk > 0.33) {
    enemyGenerator();
    console.log(userAction);
  } else if (userAction === "w" && chanceToWalk < 0.33) {
    forward < 99
      ? console.log(`You moved forward ${(forward += 10)} yards`.yellow)
      : console.log("You Win".rainbow);
  } else if (userAction === "p") {
    console.log("Player name:" + playerName.green, "HP:" + hp.toString().green);
    console.log(
      invArray.length > 0
        ? "Inventory Items: " + listInventoryItems()
        : "Items: " + "Inventory is Empty".red
    );
    console.log(
      equippedArmor.length > 0
        ? "Equipped Armor: " + equippedArmor[0].name
        : "Equipped: " + "Nothing Equipped".red
    );
  } else if (userAction === "i") {
    equippedArmor = [];

    for (let t = 0; t < invArray.length; t++) {
      console.log(`${t}-- ${invArray[t].name}`);
    }
    let selectItem = readlineSync.question(
      `Please Choose a Item by its number.  It will be infused to you and will disappear when swapped out: `
    );
    if (selectItem < invArray.length) {
      equippedArmor.push(invArray[selectItem]);
      invArray.splice(selectItem, 1);
      console.log(`You have equipped number ${selectItem}`.yellow);
    }
  }
}

function gen() {
  //Generates a random Enemy
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

function enemyGenerator() {
  //Pulls the random generated enemy if one doesn't exist or if one has been defeated
  currentHP = hp;
  if (
    typeof currentEnemyHP == "undefined" ||
    currentEnemyHP == enemyGenArray[0].enemyHP
  ) {
    gen();
    console.log(`${enemyGenArray[0].enemyName}` + ` has appeared!!!`.yellow);
  }

  if (currentEnemyHP > 0) {
    enemyCombat();
  } else if (currentEnemyHP <= 0) {
    console.log(`${enemyGenArray[0].enemyName} has been defeated!`);
    invArray.push(armorArray[randomNumberGen()]); //Once enemy is defeated a new item gets pushed to the invArray
    console.log(
      `${enemyGenArray[0].enemyName} dropped a` +
        ` ${invArray[invArray.length - 1].name}`.yellow
    );
    gen();
  }
}

function runAway() {
  //Run Away Function
  let runChance = Math.random();
  if (runChance > 0.5) {
    console.log("Ran Away Successfully!!!");
  } else if (runChance < 0.5) {
    enemyDamage = 0;
    enemyDamage = enemyDamageGen(enemyGenArray[0].enemyAP);
    console.log(enemyDamage);
    console.log("failed to run away".red);
    currentEnemyHP -= playerAP;
    currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
    currentEnemyHP > 0 ? (currentHP = hp -= enemyDamage) : (currentHP = hp);
    hp = currentHP;
    currentHP <= 0 ? (currentHP = 0) : currentHP;
    console.log(hp);
    currentEnemyHP > 0 &&
      console.log(
        `${
          enemyGenArray[0].enemyName
        } hits ${playerName} for ${enemyDamage}. ${playerName} now has ${
          hp <= 0 ? (hp = 0) : hp
        } hp left.`
      );
    hp <= 0 &&
      console.log(
        `${playerName} has been killed`.bgRed +
          "............Game Over.........".rainbow
      );
    enemyCombat();
  }
}

//////////////////////////////////////
function enemyCombat() {
  let enemyAttack = 0; //enemy combat function
  let attackOrRun = readlineSync.question(` (a) to attack, (r) attempt to run`);
  if (attackOrRun === "r") {
    runAway();
  } else if (attackOrRun === "a") {
    enemyDamage = 0;
    enemyDamage = enemyDamageGen(enemyGenArray[0].enemyAP);
    console.log(enemyDamage);
    enemyAttack = enemyDamage;
    equippedArmor.length > 0
      ? (playerAP = Math.floor(Math.random() * 11) + equippedArmor[0].armorAP)
      : (playerAP = Math.floor(Math.random() * 11)); //Generates random attack damage for player
    currentEnemyHP -= playerAP;
    currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
    currentEnemyHP > 0 ? (currentHP = hp -= enemyDamage) : (currentHP = hp);
    hp = currentHP;
    currentHP <= 0 ? (currentHP = 0) : currentHP;
    console.log(
      `${playerName} `.green +
        `hits ${enemyGenArray[0].enemyName} for ` +
        `${playerAP}`.yellow +
        ` it now has ` +
        `${currentEnemyHP}`.yellow +
        ` hp left`
    );
    currentEnemyHP > 0 &&
      console.log(
        `${enemyGenArray[0].enemyName} hits ${playerName} for ` +
          `${enemyDamage}`.red +
          `. ${playerName} now has ` +
          `${hp <= 0 ? (hp = 0) : hp}`.green +
          ` hp left.`
      );
    hp > 0
      ? enemyGenerator()
      : console.log(
          `${playerName} has been killed`.bgRed +
            "............Game Over.........".rainbow
        );
  } else enemyCombat();
}

while (hp > 0 && forward < 99) {
  walk();
  if (forward > 99) {
    console.log("You have escaped.  You Win".rainbow);
  }
}

function listInventoryItems() {
  let newArray = [];
  for (let x = 0; x < invArray.length; x++) {
    newArray.push(invArray[x].name);
  }
  return newArray;
}

function enemyDamageGen(num) {
  return Math.floor(Math.random() * num);
}
