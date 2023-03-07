class Player {
  constructor(id) {
  this.id = id;
  this.wins = 0;
  this.isWinner = false;
  this.moves = [];
  }

  incrementWins() {
    this.wins++;
    this.isWinner = true;
  }
}