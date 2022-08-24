debugger;
let readlineSync = require("readline-sync");
var colors = require("colors");
console.log("Welcome to Dark Forest!  Reach 100 yards to escape!".green);
let playerName = readlineSync.question("Please enter your name: ");
playerName = `${playerName}`.green;
let hp = 100;
let invArray = [];
let playerAP = 0;
let enemyGenArray = [];
let forward = 0;
let equippedArmor = [];

///Enemy Stats
function Enemy(hp, ap, name) {
  this.enemyHP = hp;
  this.enemyAP = ap;
  this.enemyName = name;
  //this.attackPoints = function () { Math.floor(Math.random() * this.enemyAP)}                    //not in use at the moment
}
const normEnemyNames = [  "Untrained Theif",  "Small Snake",  "Scorpian",  "Fire Ant",];
const rareEnemyNames = [  "Trained Theif",  "Anaconda",  "Giant Scorpian",  "Giant Fire Ant",];
const uniqueEnemyNames = [  "The Minotaur",  "The Kraken",  "Dracula",  "Frankenstein",];
const bossNames = ["King Kong", "Godzilla", "T-Rex", "Zeus"];
let normalEnemy = new Enemy(  5,  4,  "(N)".grey + normEnemyNames[randomNumberGen()]);
let rareEnemy = new Enemy(  10,  10,  "(R)".yellow + rareEnemyNames[randomNumberGen()]);
let uniqueEnemy = new Enemy(  15,  14,  "(U)".brightBlue + uniqueEnemyNames[randomNumberGen()]);
let boss = new Enemy(25, 25, "(B)".red + bossNames[randomNumberGen()]);
const enemies = [normalEnemy, rareEnemy, uniqueEnemy, boss];

///Armor
function Armor(ap, armorName) {
  //armor constructor
  this.armorAP = ap;
  this.name = armorName;
}
const normalArmor = new Armor(5, "(N)".grey + "Old Worn Light Armor".yellow);
const rareArmor = new Armor(10, "(R)".yellow + "Worn Plate Armor".yellow);
const uniqueArmor = new Armor(15, "(U)".brightBlue + "Gold Armor".yellow);
const legendaryArmor = new Armor(25, "(L)".red + "Armor of Power".yellow);
const armorArray = [normalArmor, rareArmor, uniqueArmor, legendaryArmor];

function walk() {
  //the main function when not fighting a enemy  Walk
  let chanceToWalk = Math.random();
  let userAction = readlineSync.question(
    "(w) Move forward 10 yards, (i) Check inventory, (p) Print stats: "
  );
  if (userAction === "w" && chanceToWalk > 0.33) {
    //chance to run into a enemy.  Currently it is 66%
    spawnEnemy();
    console.log(userAction);
  } else if (userAction === "w" && chanceToWalk < 0.33) {
    //chance to walk 10 yards is 33%
    forward < 99
      ? console.log(`You moved forward ${(forward += 10)} yards`.yellow)
      : console.log("You Win".rainbow);
  } else if (userAction === "p") {
    //prints current player stats
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
    //shows inventory
    inventory();
  }
}

function generateEnemy() {
  //Generates a random Enemy
  normalEnemy.enemyName = "(N)".grey + normEnemyNames[randomNumberGen()];
  rareEnemy.enemyName = "(R)".yellow + rareEnemyNames[randomNumberGen()];
  uniqueEnemy.enemyName =
    "(U)".brightBlue + uniqueEnemyNames[randomNumberGen()];
  boss.enemyName = "(B)".red + bossNames[randomNumberGen()];
  enemyGenArray = [];
  let i = Math.floor(Math.random() * 4);
  enemyGenArray.push(enemies[i]);
  let currentEnemyHealth = enemyGenArray[0].enemyHP;
  currentEnemyHP = currentEnemyHealth;
}
function inventory() {
  //inventory function
  equippedArmor = [];

  for (let t = 0; t < invArray.length; t++) {
    console.log(`(${t}): ${invArray[t].name}`);
  }
  let selectItem = readlineSync.question(
    `Please Choose a Item by its number.  It will be infused to you and will disappear when swapped out: `
  );

  if (typeof invArray[selectItem] === "undefined") {
    walk();
  } else {
    //process to choose and equip items
    equippedArmor.push(invArray[selectItem]);
    console.log(`You have equipped: `.yellow + `${invArray[selectItem].name}`);
    invArray.splice(selectItem, 1);
  }
}

function randomNumberGen() {
  let x = Math.floor(Math.random() * 4);
  return x;
}

function spawnEnemy() {
  //Pulls the random generated enemy if one doesn't exist or if one has been defeated
  currentHP = hp;
  if (
    typeof currentEnemyHP == "undefined" ||
    currentEnemyHP == enemyGenArray[0].enemyHP //this can cause a bug if I hit for 0 for first hit. Changed my hit to be above 0.
  ) {
    generateEnemy();
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
    generateEnemy();
  }
}

function runAway() {
  //Run Away Function  50% chance to runaway
  let runChance = Math.random();
  if (runChance > 0.5) {
    console.log("Paul Ran Away Successfully!!!".green);
  } else if (runChance < 0.5) {
    enemyDamage = 0;
    enemyDamage = enemyDamageGen(enemyGenArray[0].enemyAP);
    console.log("failed to run away".red);
    currentEnemyHP -= playerAP;
    currentEnemyHP <= 0 ? (currentEnemyHP = 0) : currentEnemyHP;
    currentEnemyHP > 0 ? (currentHP = hp -= enemyDamage) : (currentHP = hp);
    hp = currentHP;
    currentHP <= 0 ? (currentHP = 0) : currentHP;
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

function enemyCombat() {
  //enemy combat function
  let enemyAttack = 0;
  let attackOrRun = readlineSync.question(
    ` (a) to attack, (r) attempt to run: `
  );
  if (attackOrRun === "r") {
    runAway();
  } else if (attackOrRun === "a") {
    enemyDamage = 0;
    enemyDamage = enemyDamageGen(enemyGenArray[0].enemyAP);
    console.log(enemyDamage);
    enemyAttack = enemyDamage;
    equippedArmor.length > 0
      ? (playerAP =
          Math.floor(Math.random() * 11 + 1) + equippedArmor[0].armorAP) //if armor is equipped it will add the armorAP to the playerAP
      : (playerAP = Math.floor(Math.random() * 11 + 1)); //Generates random attack damage for player currently 0 - 10 without armor
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
      ? spawnEnemy()
      : console.log(
          `${playerName} has been killed`.bgRed +
            "............Game Over.........".rainbow
        );
  } else enemyCombat();
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

while (hp > 0 && forward < 99) {
  walk();
  if (forward > 99) {
    console.log("You have escaped.  You Win".rainbow);
  }
}
