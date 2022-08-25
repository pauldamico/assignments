function phraseTally() {
    fizzbuzzArray = []
    fizzArray = []
    buzzArray = []
    let tracker = {fizzbuzz:0, fizz:0, buzz:0,}
  for (let x = 1; x <= 100; x++) {
    if(x % 3 === 0 && x % 5 ===0){fizzbuzzArray.push("fizzbuzz") && console.log("fizzbuzz")}
    else if (x % 3 === 0){fizzArray.push("fizz") &&console.log("fizz")}
    else if (x % 5 === 0){buzzArray.push("buzz") &&console.log("buzz")}
    else {console.log(x)}
  }
  tracker.fizzbuzz = fizzbuzzArray.length
  tracker.fizz = fizzArray.length
  tracker.buzz = buzzArray.length
return tracker
}

console.log(phraseTally())
