function randomNumber() {
  var randomNum = Math.floor(Math.random()*6) + 1;
  return randomNum;
}

function outputDice(params) {
  var randomImgNum1 = randomNumber();
  var randomImgNum2 = randomNumber();
  document.querySelector("img.img1").setAttribute("src", "images/dice" + randomImgNum1 +".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice" + randomImgNum2 +".png");

  if(randomImgNum1 === randomImgNum2){
    document.querySelector("h1").textContent = "Draw!";
    }else if (randomImgNum1 > randomImgNum2) {
      document.querySelector("h1").textContent = "🚩Player1 Wins!"
    }else{
      document.querySelector("h1").textContent = "Player2 Wins!🚩"
    }
}

