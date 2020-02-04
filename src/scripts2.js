//HOLD button
// function Player() {
//   this.turnTotal = [];
//   this.gameTotal = 0;
//   this.currentRoll = [];
// }

export function holdDice(player1, player2) {
  var currentPlayer = 1;

  if (currentPlayer === 1) {
    player1.turnTotal.forEach(function (roll) {
      player1.gameTotal = player1.gameTotal + roll;
      currentPlayer = 2;
    });
  } else {
    player2.turnTotal.forEach(function (roll) {
      player2.gameTotal = player2.gameTotal + roll;
      currentPlayer = 1;
    });
  }
  player1.turnTotal = [];
  player2.turnTotal = [];
  if (player1.gameTotal >= 100) {
    alert("Player 1 Wins!");
  } else if (player2.gameTotal >= 100) {
    alert("Player 2 Wins!");
  }
}
