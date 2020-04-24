var rn1 = Math.floor((Math.random()*6)) + 1;
var rn1image = "dice" + rn1 + ".png";
var rn1imagesrc = "images\\" + rn1image;

var rn2 = Math.floor((Math.random()*6)) + 1;
var rn2image = "dice" + rn2 + ".png";
var rn2imagesrc = "images\\" + rn2image;

document.querySelectorAll("img")[0].setAttribute("src", rn1imagesrc);
document.querySelectorAll("img")[1].setAttribute("src", rn2imagesrc);

if(rn1>rn2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(rn2>rn1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Game Tie";
}
