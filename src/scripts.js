//ROLL button

export function Triangle() {
}

export function rollDice(player1, player2) {
  var currentPlayer = 1;
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  var diceRoll2 = Math.floor(Math.random() * 6) + 1;
  var diceImages = new Array("img/dice1.jpg", "img/dice2.jpg", "img/dice3.jpg", "img/dice4.jpg", "img/dice5.jpg", "img/dice6.jpg");
  var img = diceImages[diceRoll - 1];
  var img2 = diceImages[diceRoll2 - 1];
  
  $("#dices").empty();
  var imgStr = '<img src="' + img + '" alt = "">';
  var imgStr2 = '<img src="' + img2 + '" alt = "">';
  
  $("#dices").append(imgStr, imgStr2);

  if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 1) {
    player1.turnTotal = [0];
    $(".result1").text("Player 1 Busts!");
    $(".result2").empty();
    currentPlayer = 2;
  } else if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 2) {
    player2.turnTotal = [0];
    $(".result2").text("Player 2 Busts!");
    $(".result1").empty();
    currentPlayer = 1;
  } else if (currentPlayer === 1) {
    $(".result1").append("<li>" + diceRoll + "&nbsp &nbsp &nbsp" + diceRoll2 + "</li>");
    $(".result2").empty();
    player1.turnTotal.push(diceRoll, diceRoll2);
  } else {
    player2.turnTotal.push(diceRoll, diceRoll2);
    $(".result1").empty();
    $(".result2").append("<li>" + diceRoll + "&nbsp &nbsp &nbsp" + diceRoll2 + "</li>");
    return;
  }
}