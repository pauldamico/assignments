class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }
  setName(namePicked) {
    this.name = namePicked;
  }
  gotHit() {
    if (this.status == "Powered Up") {
      this.status = "Big";
    } else if (this.status == "Big") {
      this.status = "Small";
    } else if (this.status == "Small") {
      this.status = "Dead";
    } else if (this.status == "Dead") {
    }
  }
  gotPoweredUp() {
    if (this.status == "Big") {
      this.status = "Powered Up"       
    } else if ((this.status = "Small")) {
      this.status = "Big";
    }

  }
  addCoin() {
    this.totalCoins++;
  }
  print() {
    newPlayer.status == "Powered Up" ? newPlayer.hasStar = true : newPlayer.hasStar = false   
    console.log(`
    
    Name: ${newPlayer.name}
    Status: ${newPlayer.status}
    Total Coins: ${newPlayer.totalCoins}
    ${newPlayer.hasStar === true ? "You have a Star" : ""}
    `);
  }
  endGame() {
    console.log(`
    
    Name: ${newPlayer.name}
    Status: ${newPlayer.status}
    Total Coins: ${newPlayer.totalCoins}
    Your Final Score is ${newPlayer.totalCoins}
    `)
    clearInterval(runGame);
  }
}

const newPlayer = new Player("Mario", 0, "Big", false);
// newPlayer.setName("Mario")
// newPlayer.gotHit("Big")

function randomRange() {
    let randomNumber;
    newPlayer.print();
  randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    newPlayer.gotHit();
  } else if (randomNumber === 1) {
    newPlayer.gotPoweredUp();
  } else if (randomNumber === 2) {
    newPlayer.addCoin();
  }
  newPlayer.status == "Dead" && newPlayer.endGame();
  
}

const runGame = setInterval(randomRange, 1000);
if (newPlayer.status == "Dead") {
  endGame() + console.log(Player.status + "22222222222");
}
