var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdiceimage1 = ("dice"+ randomnumber1 +".png");
var diceshow1= ("images/"+ randomdiceimage1);
document.querySelectorAll("img")[0].setAttribute("src", diceshow1);

var randomnumber2= Math.floor(Math.random()*6)+1;
var randomdiceimage2=("dice"+randomnumber2+".png");
var diceshow2=("images/"+randomdiceimage2);
document.querySelectorAll('img')[1].setAttribute("src", diceshow2);


if (randomnumber1 > randomnumber2) {

  document.querySelector("h1").innerHTML = "player 1 wins  🏁 ";

}
else if (randomnumber2 > randomnumber1) {

  document.querySelector("h1").innerHTML = "  🏁  player 2 wins";

}
else {
  document.querySelector("h1").innerHTML = "Draw  🏴‍☠️";
}
