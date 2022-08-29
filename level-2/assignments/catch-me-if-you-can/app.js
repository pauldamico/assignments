try{
sum(2,3)

}
catch(err){
console.log(err)}

finally{
    console.log("Test ended")
}


function sum(x, y){
    if(typeof y != "number" || typeof x != "number"){throw new Error(`${x} or ${y} must both be numbers`)}
    return x + y
}

function login(username, password){
    if(username != password){throw new Error(`The username: ${username} does not match the password: ${password}`)}
    return console.log("Logged in successfully")
}

try{
login("test", "tes1t")
}
catch(err){
    console.log(err)
}
finally{
    console.log("password requirement test ended")
}