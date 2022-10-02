var random1 = Math.floor(Math.random()*6) + 1;

var dice1 = "images/dice" + random1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dice1);


var random2 = Math.floor(Math.random()*6) + 1;

var dice2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", dice2);

if(random1 > random2){
    // document.querySelector("h1").innerHTML = "Refresh Me";
    document.querySelectorAll("p")[0].innerHTML = "<strong>🏆 <u>Player 1</u></strong>";
}
else if(random1 < random2){
    // document.querySelector("h1").innerHTML = "Refresh Me";
    document.querySelectorAll("p")[1].innerHTML = "<strong><u>Player 2</u> 🏆</strong>";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

console.log(random1);
console.log(dice1);

console.log(random2);
console.log(dice2);