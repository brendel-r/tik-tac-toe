class Game {
  constructor() {
  this.player1 = new Player('Wendy the Witch');
  this.player2 = new Player('Zeke the Zombie');
  this.turn = this.player1;
  this.boardProspects = [['b0', 'b1', 'b2'], ['b3', 'b4', 'b5'], ['b6', 'b7', 'b8'], ['b2', 'b4', 'b6'], ['b0', 'b4', 'b8'], ['b0', 'b3', 'b6'], ['b1', 'b4', 'b7'], ['b2', 'b5', 'b8']];

  }
  toggleTurn() {
    if(this.player1 === this.turn) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
  generateValue() {
    for(var i = 0; i < this.boardProspects.length; i++) {
      if(this.boardProspects[i][0] === event.target.id) {
        this.boardProspects[i][0] = this.turn.id
      } else if(this.boardProspects[i][1] === event.target.id) {
        this.boardProspects[i][1] = this.turn.id
      } else if(this.boardProspects[i][2] === event.target.id) {
        this.boardProspects[i][2] = this.turn.id
      }
    }
  }
  checkForWinner() {
    for(var i = 0; i < this.boardProspects.length; i++) {
      if(this.boardProspects[i][0] === this.player1.id && this.boardProspects[i][1] === this.player1.id && this.boardProspects[i][2] === this.player1.id) {
        this.player1.incrementWins();
      } else if(this.boardProspects[i][0] === this.player2.id && this.boardProspects[i][1] === this.player2.id && this.boardProspects[i][2] === this.player2.id) {
        this.player2.incrementWins();
      }
    }
  }
};