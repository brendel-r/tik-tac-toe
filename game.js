class Game {
  constructor(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.turn = player1;

  }
  toggleTurn() {
    if(this.player1 === this.turn) {
      this.turn = player2;
    } else {
      this.turn = player1
    }
  }
  resetGameBoard() {
  setTimeOut() or setInterval()
  }
};