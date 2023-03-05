class Player {
  constructor(id) {
  this.id = id;;
  this.wins = 0;
  this.isWinner = false;
  }

  incrementWins() {
    this.wins++;
    this.isWinner = true;
  }
}